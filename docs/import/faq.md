---
title: Import FAQ
tags: [faq, import, spotify]
description: Frequently asked questions about importing your Spotify data
---

# Import FAQ

## There are no `endsong.json` files present in the files I recieved

Spotify has unfortunately sent you the wrong files. Spotify has two types of file packages: a package with just some basic info which only covers one year (this package arrives around 3 days after requesting), and a package that includes over 60 files with detailed info and which has data from the minute you've signed up for Spotify (this package arrives about 2-3 weeks after requesting).

In this case, you got the first package, which doesn't include the data needed. The Spotify employee who helped you probably doesn't even know of the existence of the large package. Sending the same email again may help, since another employee will respond to your request. Sorry for the inconvience!

## What's the difference between _Machine learning_ and _Count_? {#machine-learning-vs-count}

You may have noticed that there are two ways to sort your top tracks, artists and albums. Both are explained below.

### _Machine learning_

This is currently the default option. Items are provided and sorted by [Spotify's Web API](https://developer.spotify.com/documentation/web-api/reference/#category-personalization). Spotify uses their enourmous database and fancy machine learning models to calculate the list. This may sound cool, but has proven to be quite inaccurate. Nothing has been confirmed, but the order is probably based on these factors: total play time, skipping rate, at which time you've listened and whether the item has ever occured in your lists before. This means that some items may not be included in the list, even though you've streamed them more than other items that do appear in the list. This is also how all other Spotify statistics services sort your top tracks, artists and albums (inaccurately :P).

#### Advantages

- Can be a little bit faster

#### Disadvantages

- Limited to 3 time ranges (4 weeks, 6 months, lifetime)
- Has proven to be inaccurate

### _Count_

This way of sorting the items is way more accurate, since it just uses the amount of streams of that item. To really make use of the sort by count, you should [import your lifetime streaming history](./streaming-history). Selecting this sorting option will also allow for a list longer than 99 items, since it doesn't need the Spotify API (which is limited at 99). This also means that you can select custom time ranges, instead of the 3 predefined time ranges from the Spotify API.

#### Advantages

- A lot more accurate
- Custom time ranges

#### Disadvantages

- Calculating this list can take up to 3 seconds (depending on how busy the servers are)
- Requires a [one time import of your history](./streaming-history)
