---
title: clean out old dependencies from your package manager
pubDate: 2023-11-01 10:19
updatedDate: 2023-11-01 10:19
id: 20231101101115-clean-out-old-dependencies-from-your-package-manager
---

Because you've probably got a load of old versions of packages, and possibly even language versions, lying around on your hard drive eating disk space.

For javascript, [npkill](https://npkill.js.org/) exists, which gives you an interactive list of all the `node_modules` folders it can find, and lets you delete them. I tend to run this explicitly in the directory where I keep all of my git repos (managed by [ghq](https://github.com/x-motemen/ghq)) so I don't accidentally delete the dependencies of actual applications which happen to use javascript.

For Rust, there's [cargo-sweep](https://github.com/holmgr/cargo-sweep), which plays really nicely with [[Use Rustup to install Rust|rustup]].
