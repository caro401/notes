---
title: Handwritten text recognition is OCR for manuscripts
pubDate: 2024-11-27
lastUpdated: 2024-11-28
id: 20241127171164-handwritten-text-recognition-is-ocr-for-manuscripts
---

It takes into account not just individual glyphs, but the surrounding characters, words and lines.

You probably want a different model per kind of script and language. This is usually made through supervised learning - have your own correct (ground truth) transcription of some of the text you want to transcribe. This is what you make your grad students do, and the more they do, the better your model will be

[Transkribus](https://www.transkribus.org) is the most feature-rich client for doing this. But it is not open-source and not free to use. They are super big on "AI" at the moment, but really all kinds of OCR/HTR are machine learning models.

Viable open-source alternatives are [escriptorium](https://gitlab.com/scripta/escriptorium) (platform) and [Kraken](https://kraken.re/main/index.html) which is open source (MIT?). Also [calamari/OCRD](https://github.com/OCR-D/ocrd_calamari) and [ocr4all](https://www.ocr4all.org) and [pero ocr](https://pero-ocr.fit.vutbr.cz)

"Smart models" can do additional steps after pure transcription, for example putting spaces in _scriptura continua_ , expanding abbreviations, modernising orthography. Or indeed show both philologically faithful transcriptions and one for a general reading audience.

LLMs can be applied to attempt to correct errors from HTR - this will do things like fix punctuation. This obvs works best in modern standard languages, especially english. Also use them for other tasks like named entity recognition (NER), summarising. Sometimes, depending on what you want to do with the text, this can be useful.

HTR has errors, will always have errors. This kind of data (loooots of pages, some error) is differently interesting to few pages low error analysis, you can ask different questions of it - quantitative analysis. You have to evaluate how your errors from various processes are interacting. Know your data, know how noise/errors can occur, know what that might mean for your interpretation of what you find.

## Sources

- [This lecture](https://www.youtube.com/watch?v=kfANPMJFUbA)
