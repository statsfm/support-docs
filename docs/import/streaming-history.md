---
name: Import Guide
tags: [import, spotify, guide]
description: How to import your Spotify streaming history
---

# Import Guide

import DataRequestGenerator from '@site/src/components/DataRequestGenerator';
import FramedGenerator from '@site/src/components/DataRequestGenerator/FramedGenerator';
import BrowserOnly from '@docusaurus/BrowserOnly';

## 1. Request your data from Spotify

:::tip Tip

**Sending this email from your Spotify account's email address**, makes this process a lot easier and quicker. Otherwise they may ask for another way to identify yourself (naming a song you've recently added to your library may suffice already).

:::

In order to request the `endsong.json` files you need to import your streaming history, you'll need to send a simple email to [support@spotify.com](mailto:support@spotify.com). You can use the generator below to generate the email text.

<BrowserOnly>
 <FramedGenerator />
</BrowserOnly>

## 2. Confirm your request

As soon as your request is accepted by Spotify, you'll receive a link to confirm the request in your email. Confirm it, and Spotify will start gathering your data.

![Step 2 image](./step-2.png)

## 3. Turn on _Sync streaming history_ to prevent a gap in your data

The files you receive from Spotify miss the last 2-5 days of data. For example: if you've requested the data on June 1st and you've received the data on June 14th, the data will include streams until about June 12th. You can turn on the setting _Sync streaming history_ after you've requested your files to make sure you don't miss any data. You can do so in _Settings_ > _Algorithms, import & stream sync_ > _Sync streaming history_. Make sure to set this to _Enabled_. You can read more about streaming history synchronisation [here](../streams/sync).

## 4. Wait until you receive your data

This can take a while. As Spotify states:

> We're currently gathering a copy of your personal data. This shouldn't take longer than 30 days. But don't worry, we'll send you an email when it's ready.

It turns out, users generally receive the data within a week. That's still quite a long wait, but trust me: it's worth it :)

## 5. Download and extract the files

Once your data is ready to download, you'll get an email with a link to download a .ZIP file. You need to extract this file before proceeding. You can learn how to extract .ZIP files [here](https://www.youtube.com/watch?v=do3u3tXAbWQ).

:::warning Warning

**Never share your files with others!** The data may contain a lot of personal information, depending on what Spotify has sent you.

:::

![Step 5 image](./step-5.png)

## 6. Upload your files

:::warning Warning

You can only upload one `endsong.json` file at a time.

:::

When you have your extracted .JSON files ready, go to [stats.fm/import](https://stats.fm/import), login and click the _Import a new file_ button. Then, select your first `endsong.json` file. You have to upload files one by one.

After clicking selecting the file, your file will be sent to the Spotistats servers to be processed. This can take a few minutes. Meanwhile you can already upload your next file.

![Step 6 image](./step-6.png)

## 7. Wait for your streams to be processed

Once your streams have reached the Spotistats servers, they need to be processed. Duplicate streams will be filtered out, and there will be a lot of calculations made for each stream in order to save it securely in the database. This can take a while. Depending on the amount of streams and the amount of people importing their streams at once this can take just a few seconds up to a couple of hours.

:::tip Tip

If you don't like staring at a webpage for a long time, you can close the tab while your streams are being processed.

:::

## 8. Ready to go!

Congratulations! You can now view your full listening history, play count, and much more. Your future streams will be synced to the database automatically.
