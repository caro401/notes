---
title: Conda is a package and environment manager for python
pubDate: 2023-05-22
lastUpdated: 2023-07-24
id: 20230522140501-conda-is-a-package-and-environment-manager-for-python
---

I usually use poetry for managing my dependencies, but other folks often use conda so I need to know my way around it. Like poetry, conda manages virtual environments, and getting packages installed into those environments. It is mostly useful for scientific computing applications, because of how it distributes pre-built packages. This means you can use C- or Fortran-based packages without needing a compiler installed, as long as there's a binary for your architecture.

As usual, I get my shell prompt to help remind me I'm using conda. I use starship, [here's the docs for the conda prompt section](https://starship.rs/config/#conda)

Miniconda is the install of conda that comes with just enough to run conda itself. Anaconda comes bundled with a ton of packages - it is 3GB or so on disk.

## Managing environments

Taken from conda's own [getting started guide](https://conda.io/projects/conda/en/latest/user-guide/getting-started.html)

Make a new environment like

```sh
conda create --name snowflakes biopython python=3.10
```

this makes an environment called `snowflakes` using Python 3.10 and installs the package `biopython` into it.

Activate that environment like

```sh
conda activate kiara_tutorial
# or activate the base env like
conda activate # no name here
```

Check what envs you have like

```sh
conda info --envs
#or
conda env list
```

(`conda info` tells you a bunch about the install of conda you have, and what env is currently active)

check which python you are using with `which python`, or `where python` on Windows.

You can set environment variables within specific conda environments like

```sh
conda env config vars set my_var=value
# see the env vars managed by conda
conda env config vars list
```

## Managing packages

Look for a package

```sh
conda search beautifulsoup4
```

then install it into the currently active environment

```sh
conda install beautifulsoup4
```

Check what other packages are installed

```sh
conda list
# or to ask about an environment that isn't currently active
conda list -n myenv
```

You can use pip with conda, but they recommend installing as much as you can using conda, and then [conda-forge](https://conda-forge.org/) before falling back to pip.

Conda's lockfile-type thing is called `environment.yml`. You make one like this

```sh
conda env export > environment.yml
```

This is the equivalent of pip freeze - you get everything installed in that environment, as well as the python version, any environment variables and the name. If you just want the things you specifically installed, use `conda env export --from-history`. You can then create an environment from this file using `conda env create -f environment.yml`

```sh
# open a new prompt then
conda activate kiara_tutorial
conda update --all
pip install jupyter --upgrade
pip install ipython --upgrade
pip install -e .
jupyter notebook
```
