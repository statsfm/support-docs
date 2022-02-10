#!/bin/bash

yarn write-translations
# If DEPLOY_CONTEXT is set to preview or not set, then we will not upload and download from crowdin
if [ "$DEPLOY_CONTEXT" == "preview" ]; then
  echo "Skipping crowdin upload and download"
else
  echo "Uploading and downloading translations from crowdin..."
  yarn crowdin upload sources
  yarn crowdin download
fi
yarn build
