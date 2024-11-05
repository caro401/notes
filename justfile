# List all the things you can do with this justfile, with descriptions
help:
  @just --list

# Run the project for local development
dev:
    pnpm dev

alias setup := install
# Install all project dependencies
install:
    pnpm i
    pnpx playwright install --with-deps chromium

# Update all project dependencies
update-deps:
    pnpm update

# Build the project for production deployment
build:
    pnpm build

alias fmt := format
# Run the code formatter
format:
    pnpm format

# Run static analysis on the code
lint:
    @echo "⚠️  You haven't configured a linter for this repo! You probably should"
    @exit 1

# Run all the tests
test:
    @echo "ℹ️  You decided this repo probably doesn't need tests"

links: build
    lychee --no-progress --scheme https ./dist  