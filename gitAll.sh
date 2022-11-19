#!/bin/bash -v
#important copy zsh to wsl github
cp ~/.cache/zsh/history /mnt/c/all/whis
cp /home/steff007/.bash_aliases /mnt/c/all/wsl_aliases
cd /mnt/c/all || exit
git add .
git commit -am "auto commit"
git push
