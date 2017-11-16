#!/usr/bin/env bash

git checkout package-lock.json
git checkout master
git pull
npm i
npm run build
pm2 restart 1
sudo systemctl reload nginx