---
title: UV might be a useful python tool
pubDate: 2024-11-26
lastUpdated: 2025-01-02
id: 20241126151181-uv-might-be-a-useful-python-tool
---

[UV's actual site/docs](https://docs.astral.sh/uv/). I haven't used it in anger yet, but am interested to try. Brain dump of resources/other people's opinions for now.

I spend a decent chunk of time trying to help people who don't program for a living get up and running with python. Managing dependencies, virtual environments and stuff is always the hardest thing to explain, and for them to remember and keep track of, particularly when they don't really have concrete understanding of why this is necessary. Maybe UV can make this easier?

Before UV, I use pyenv and poetry for personal things, and conda for some work things (I don't like it).

UV is modelled on cargo, which is a really pleasurable thing to use.

UV should be fast to resolve dependencies (if it works?), much faster than pip. Lots of things are faster. This makes little difference for human work day to day, but probably does make a big difference for you in CI.

`--resolution=lowest` useful for testing packages

UV is virtual-environment first (what does that actually mean?)

There's no standard for cross-platform lockfiles in python ([yet?](https://discuss.python.org/t/lock-files-again-but-this-time-w-sdists/46593)). UV has its own format now, since it shipped before the PEP got sorted. `uv sync` can completely recreate your virtual environment super quick.

It is moving fast at the moment. Yay progress I guess, but it's a bit of a moving target to actually use or attempt to teach.

UV can be the only tool you need for all the things? Including installing python itself (ish, it has some quirks because python doesn't really want to be a standalone thing even though [python-build-standalone](https://gregoryszorc.com/docs/python-build-standalone/main/index.html) exists, and Astral now maintain it!).

`uv run` rather than activating virtual environments.

It doesn't have a command runner (yet?) (`npm run test` or whatever), but I don't need one. Like Hynek, I use `just`.

Astral is VC-backed, which is a big question, but the code is currently open source and permissively licensed, and seems to be doing well in the community, so would probably be forked/supported etc in the event it went away.

Question about making dev tools for a language in rust (javascript is having the same question). Not as accessible for python users to contribute, but being able to install a single binary is nice

`uv self update` regularly to keep up with changes!

## Sources/further reading

Note that UV is changing super fast at the moment, things addressed in these sources are probably outdated by now!

- [this video from Hynek Schlawack](https://www.youtube.com/watch?v=_FdjW47Au30) about UV as a tool for packaging
- [and the followup video](https://www.youtube.com/watch?v=8UuW8o4bHbw)
- [Hynek's dockerfile](https://hynek.me/articles/docker-uv/) and [Michael Kennedy's](https://mkennedy.codes/posts/python-docker-images-using-uv-s-new-python-features/)
- [Using UV on a django project](https://blog.pecar.me/uv-with-django)
- [Someone's experience setting up their entire python environment with UV](https://andrich.me/2024/09/uv-i-am-somewhat-sold/)
- [Simon Willison summarised a long mastodon discussion](https://simonwillison.net/2024/Sep/8/uv-under-discussion-on-mastodon/)
- [and wrote about how to make a CLI with UV](https://til.simonwillison.net/python/uv-cli-apps) (I like looking at people's workflows with tools I don't know)
- [Charlie Marsh on Talk Python](https://talkpython.fm/episodes/show/476/unified-python-packaging-with-uv)
- [This person doesn't recommend it yet](https://www.bitecode.dev/p/whats-up-python-uv-disrupts-packaging) (August 2024)
- [Jeff Triplett uses it for one-off scripts](https://micro.webology.dev/2024/08/22/python-uv-run.html), inspired by [Simon Willison using a shebang for uv](https://simonwillison.net/2024/Aug/21/usrbinenv-uv-run/)
- [is managed python the right way to go in production?](https://pythonspeed.com/articles/uv-python-production/) (TL;DR yes probably, but as usual think about security and your use case)
- [This pretty comprehensive guide](https://www.saaspegasus.com/guides/uv-deep-dive/) to what you can do with UV and what tools each bit replaces

