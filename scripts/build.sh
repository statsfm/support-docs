#!/bin/bash

yarn write-translations
yarn crowdin upload sources
yarn crowdin download
yarn build
