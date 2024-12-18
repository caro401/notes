# /// script
# requires-python = ">=3.12"
# dependencies = [
#     "python-frontmatter",
#     "python-slugify",
#     "typer"
# ]
# ///

import os
import frontmatter
from datetime import datetime
import typer
from slugify import slugify 

notes_directory = 'notes'

app = typer.Typer()

@app.command()
def list_titles(week: int = None, year: int = None):
    current_date = datetime.today()
    week_number_to_use = week if week is not None else current_date.isocalendar()[1]
    year_to_use = year if year is not None else current_date.year

    matching_titles = []

    for filename in os.listdir(notes_directory):
        if filename.endswith('.md'):
            file_path = os.path.join(notes_directory, filename)
            post = frontmatter.load(file_path)
            last_updated_date = post.metadata['lastUpdated']
            last_updated_week_number = last_updated_date.isocalendar()[1]
            last_updated_year = last_updated_date.year
            
            if last_updated_year == year_to_use and last_updated_week_number == week_number_to_use:
                matching_titles.append({"title": post.metadata["title"], "slug": f"https://notes.caro.fyi/notes/{slugify(filename.replace("notes/", "").replace(".md", ""))}/"})
    
    typer.echo(f"Notes updated in week {week_number_to_use}, {year_to_use}:")
    for item in matching_titles:
        typer.echo(f"- [{item['title']}]({item['slug']})")


if __name__ == "__main__":
    app()
