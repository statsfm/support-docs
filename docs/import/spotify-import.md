---
name: Spotify Import Guide
tags: [import, spotify, guide]
sidebar_position: 2
description: How to import your Spotify streaming history
---

# Spotify Import Guide

import DataRequestGenerator from '@site/src/components/DataRequestGenerator';
import BrowserOnly from '@docusaurus/BrowserOnly';
import RequestYourData from '@site/src/components/ImportGuide/RequestYourData';
import ConfirmRequest from '@site/src/components/ImportGuide/ConfirmRequest';
import TurnOnSync from '@site/src/components/ImportGuide/TurnOnSync';
import WaitForData from '@site/src/components/ImportGuide/WaitForData';
import DownloadFiles from '@site/src/components/ImportGuide/DownloadFiles';
import UploadFiles from '@site/src/components/ImportGuide/UploadFiles';
import WaitForProcessing from '@site/src/components/ImportGuide/WaitForProcessing';
import ReadyToGo from '@site/src/components/ImportGuide/ReadyToGo';

:::caution stats.fm Plus required

To be able to import your Spotify streaming history, you need to have **stats.fm Plus**.

:::

## 1. Request your data from Spotify

<RequestYourData />

## 2. Confirm your request

<ConfirmRequest />

## 3. Turn on _Sync streaming history_ to prevent a gap in your data

<TurnOnSync />

## 4. Wait until you receive your data

<WaitForData />

## 5. Download and extract the files

<DownloadFiles />

## 6. Upload your files

<UploadFiles />

## 7. Wait for your streams to be processed

<WaitForProcessing />

## 8. Ready to go!

<ReadyToGo />