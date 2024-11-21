---
title: Pretty git log
pubDate: 2024-11-21
lastUpdated: 2024-11-21
id: 20241121161143-pretty-git-log
---

I have an alias (`glp`) saved in my shell for making a pretty git log.

```bash
git log --graph --abbrev-commit --decorate --format=format:"%C(bold blue)%h%C(reset) - %C(bold cyan)%aD%C(reset) %C(bold green)(%ar)%C(reset)%C(auto)%d%C(reset)%n%C(white)%s%C(reset)%C(dim white)- %an%C(reset)"
```

I honestly don't care what all the bits do, and stole the line from [stack overflow](https://stackoverflow.com/a/9074343), but I use it a lot.
