---
title: Differences between calculation methods
tags: [faq, spotify, machine learning]
description: Differences between the calculation methods of the data on the Top pages.
---

You may have noticed that there are more ways to sort your top tracks, artists and albums. We will try to explain all of them below.

### Machine learning

This is currently the default option. Items are provided and sorted by [Spotify's Web API](https://developer.spotify.com/documentation/web-api/reference/#category-personalization). Spotify uses their enourmous database and fancy machine learning models to calculate the list. This may sound cool, but has proven to be quite inaccurate. Nothing has been confirmed, but the order is probably based on these factors: total play time, skipping rate, at which time you've listened and whether the item has ever occurred in your lists before. This means that some items may not be included in the list, even though you've streamed them more than other items that do appear in the list. This is also how all other Spotify statistics services sort your top tracks, artists and albums (inaccurately :P).

#### Advantages

- Can be a little bit faster

#### Disadvantages

- Limited to 3 time ranges (4 weeks, 6 months, lifetime)
- Has proven to be inaccurate

### Count

This way of sorting the items is way more accurate, since it just uses the amount of streams of that item. To really make use of the sort by count, you should [import your lifetime streaming history](../spotify-import). Selecting this sorting option will also allow for a list longer than 99 items, since it doesn't need the Spotify API (which is limited at 99). This also means that you can select custom time ranges, instead of the 3 predefined time ranges from the Spotify API.

#### Advantages

- A lot more accurate
- Custom time ranges
- Faster than machine learning

#### Disadvantages

- Requires a [one time import of your history](../spotify-import)

### Time played

This way of sorting the items is just like the count sorting way more accurate, but it uses the time you've listened to the item instead of the amount of streams. To really make use of the sort by time played, you should [import your lifetime streaming history](../spotify-import). Selecting this sorting option will also allow for a list longer than 99 items, since it doesn't need the Spotify API (which is limited at 99). This also means that you can select custom time ranges, instead of the 3 predefined time ranges from the Spotify API.

#### Advantages

- A lot more accurate
- Custom time ranges
- Faster than machine learning
- Songs that you have streamed less but are longer (like mashup or specific genres) will now appear higher in the list

#### Disadvantages

- Requires a [one time import of your history](../spotify-import)
