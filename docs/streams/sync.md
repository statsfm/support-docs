---
title: History synchronisation
tags: [history, sync, streams]
description: How does the history synchronisation work?
---

# Streaming history synchronisation

After importing your streaming history (which you can read more about [here](../import)), you obviously want your data to be kept up to date. This feature will automatically do that for you.

## How it works

About every 60 minutes, your 50 most recently played tracks are fetched from Spotify and saved to the database where your imported streams are stored as well. Because this happens continuously, the database - and thus the data in the app - will be kept up to date :)

## Enabling

This feature is disabled by default. After importing your data, this feature is automatically enabled to keep your data up to date.

There is an option to enable the synchronisation manually. When you request your data, it'll take about 2 weeks before it arrives. It will contain data from the birth of your Spotify account to about 2 days before you've received the files. For example: if you've requested the data on June 1st and you've received the data on June 14th, the data will include streams until about June 12th. If you're concerned about this data gap, you can manually turn on the sync after you've requested your data. You can do so in the app's _Settings_ > _Connections_ > _Sync streams_.

### I want this feature without importing my data

Of course you can enable this feature without importing your data, but please note that you wont be able to view (accurate) lifetime data.

## Duplicates

Duplicate streams found in both your imported data and your synchronised data are automatically filtered out. You won't see any duplicate streams.
