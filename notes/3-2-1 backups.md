---
title: 3-2-1 backup strategy
pubDate: 2024-11-13
lastUpdated: 2024-11-13
id: 20241113161156-3-2-1-backups
---

Traditionally, this looks like 3 copies of your data, on 2 types of storage media, 1 offsite (physically or cloud). But nowadays there's various different interpretations of what bits are important, or whether you should have more copies.

Different media types is important to help eliminate data loss due to media failure - different media types fail under different conditions. These days this might just be different brands or ages of hard drive, rather than you actually having a tape drive in your house.

The offsite bit is important for eg house fire/theft/natural disaster. It's unlikely that both your house and your offsite backup place would get destroyed at the same time.

Having 2 copies onsite helps with fast recovery often, and is more convenient. But don't leave them right next to each other most of the time, because this can help reduce risk from theft/accident/your tapes melting because you left them on top of the server.

Some people suggest 322 (3 copies of your data, 2 media types, 2 cloud locations) now that cloud is much more prevalent.

Your cloud storage provider will probably do the 2 for you now ie cross-region replication in AWS S3, but if you are worried you should check with them. Remember that clouds can have disk outages too, check with your provider what there SLA is.

Other people advocate for at least one copy not being online.

Whatever combination of things, back up your files! For my important files, I have one copy on my working computer, one on our NAS and one in Backblaze.

Getting backups set up initially will probably be a bit of a pain, but maintenance should be quick and easy ongoing.

When you're choosing where to put things, think about how fast do you need to be able to restore? Make sure you know how to do file recovery, before you have to do it in a high-stress situation.

## Sources

- [Reminded about this on Mastodon](https://social.jacobian.org/@jacob/113473338504591549) from Jacob Kaplan-Moss.
- [Backblaze has some more explanation](https://www.backblaze.com/blog/the-3-2-1-backup-strategy/)
- [3-2-1 backup sucks?](https://www.unitrends.com/blog/3-2-1-backup-sucks)
