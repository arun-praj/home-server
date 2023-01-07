#! /bin/sh
cd ~/code/
date +'%m/%d/%y'
date + '%r'
git add .
git commit -m "Backup: $date"
git push
