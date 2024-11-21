---
title: There's no real reason why results in a computational field shouldn't be reproducible
pubDate: 2024-11-14
lastUpdated: 2024-11-14
id: 20241114141114-there's-no-real-reason-why-results-in-a-computational-field-shouldn't-be-reproducible
---

In experimental fields where you're collecting data and can't know all the factors you might need to control for, not being able to precisely reproduce results might be forgivable. But when your domain is just writing code to process data and generate figures and do statistics, there's no reason why that part of the process shouldn't be perfectly reproducible.

There's no environmental factors you can not know about for example - you can know everything your code needs to run. You can also know what code was run when, and on what data (even if reproducing the raw, unprocessed data set itself isn't necessarily possible).

[Snakemake](https://snakemake.readthedocs.io/en/stable/) is one option for scripting your workflow and re-running only what is necessary when you change things. Combine this with git (and tags) to keep your code, and your package manager's lockfiles and docker (or some other container system) published images to define your environment.

> the more often you re-create your environment, the more reproducible it is.

## Sources

- [Code refinery on reproducible research](https://coderefinery.github.io/reproducible-research/motivation/)
