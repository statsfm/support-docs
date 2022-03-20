---
title: Import streaming history
tags: [import, streams]
description: Import your streaming history from Spotify
---

# Importing your streaming history

Spotify provides some streaming data through [their API](https://developer.spotify.com/documentation/web-api/reference/), but this does not include the amount of times you've streamed a specific artist or track. In order to gain access to the features listed below, you'll have to import your streaming history.

- Viewing how many times you streamed an artist, tracks or album
- Viewing your full streaming history (obviously)
- Sorting your top tracks & artists by the amount of streams [instead of machine learning](./faq#machine-learning-vs-count).
- Viewing charts which include some amount of streams

## How often do I need to import my streaming history?

From the moment you've imported your first file, the systems will automatically keep your streaming history up to date about every 100 minutes. You can learn how to import your streaming history into the app [here](./streaming-history).

## Why does the app show a different number of streams than the endsong.json files?

You may notice that the total amount of streams in your data files doesn't match the number shown on the stats page in the app. This happens because Stats.fm filters out a couple of types of streams:

- Skipped tracks\* (since they make your stats inaccurate)
- Streams shorter than 30 seconds\* (since they make your stats inaccurate)
- Local files and Podcasts (since Spotify doesn't provide any info about these)

\* These types of streams are saved in the database, but "hidden" from the stats. In a future update, you'll be able to include or exclude these from your stats, but they're excluded for now.
