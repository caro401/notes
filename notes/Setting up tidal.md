---
title: Setting up tidal
pubDate: 2024-10-22T14:34
updatedDate: 2024-10-28T10:10
id: 20241022141047-setting-up-tidal
---

- [Make Music With Code - YouTube](https://www.youtube.com/watch?v=5wAI3wHLZQc&list=WL&index=20) and [Build Your Own Live Music Visualization - YouTube](https://www.youtube.com/watch?v=0kcbWQg99TA&list=PLz8Iz-Fnk_eTpvd49Sa77NiF8Uqq5Iykx&index=92)
  - Install tidal cycles: `curl https://raw.githubusercontent.com/tidalcycles/tidal-bootstrap/master/tidal-bootstrap.command -sSf | sh` from [MacOS | Tidal Cycles](https://tidalcycles.org/docs/getting-started/macos_install)
  - tidal is a DSL based in haskell, to talk to supercollider [index | SuperCollider](https://supercollider.github.io/)
  - open Supercollider, run `SuperDirt.start` and maybe faff with settings. cmd-enter to run lines. Check for the server to be happy log lines, and green numbers at the bottom

```
Server.killAll // kill server
SuperDirt.start // start the server

// list devices
ServerOptions.inDevices
ServerOptions.outDevices

//set output devices (headphones on mac mini)
Server.default.options.outDevice_(ServerOptions.outDevices[3])
Server.local.options.outDevice_(ServerOptions.outDevices[3])
```

You might need to change input sample rate, do this with raycast 'audio MIDI setup'. After this, you can ignore supercollider.

pretty simple lil drum pattern

```
d1 $ sound "bd*2"

d2 $ sound "hh hh*<1 2> hh [hh*<1 2 1 8>]"

d3 $ slow 2 $ sound "~ sd ~ [sd*<1 1 1 3>]"

hush
```

- euclidean rhythms `d1 $ sound "bd(<3 2 3 4>,8)"` put 3 beats across (then 2 then 3 then 4)
- you can write lots of lines of code for one channel, switch between which ones you are running. Switch things up a lot so they don't get stale, remember you have the power to turn things off too
  Open VsCode (kinda like atom?), open a `.tidal` file. Run lines with shift-enter. remember `hush` to make it stop playing
  see [Dan on youtube](https://www.youtube.com/user/DanQG)

- ableton has a learn synthesis thing [Learning Synths](https://learningsynths.ableton.com/). We are using supercollider as an audio synthesiser. The drums are samples
- supercollider can show you graphs of what it does - menubar -> server -> show scope
- `lpf` low pass filter, `room` for some reverb, `legato` for how much of the space the note takes up
- [https://dotpiano.com](https://dotpiano.com/) you can send midi (to get nicely sampled piano).
- you can bring tidal outside of supercollider's sounds by setting it up as a midi client

```
MIDIClient.init;
```

[livecode.nyc | LiveCode.NYC](https://livecode.nyc/)

[Toplap](https://toplap.org/wiki/Main_Page) to find algoraves [The Book of Shaders](https://thebookofshaders.com/)

[Site Unreachable](https://www.shader.place/) ([GitHub - CharStiles/shaderplace: Real-time collaborative GLSL livecode editor](https://github.com/CharStiles/shaderplace) code) collaborative shader editor thing

[KodeLife | hexler.net](https://hexler.net/kodelife) is a native one
