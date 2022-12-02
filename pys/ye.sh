#!/usr/bin/env bash
#utility to download you tube  videos
# Ask the user for login details
clear
echo "Youtube audio downloader"
echo "-----------------------------"
cd /mnt/c/you || exit
fd . -td -d 1 | column
cd - || exit
read -p 'Enter DL youtube directory: ' DIRY
exit
# DIRY="lazy"
newdir="/mnt/c/you/$DIRY"
echo "$newdir"
mkdir -p $newdir
cd $newdir || exit
read -p  'Enter DL youtube audio: ' USERVAR
echo "USERVAR IS: ${USERVAR}"
echo "($date)" >> /mnt/c/you/dates.txt ' - ' "$USERVAR"
yt-dlp -f 'ba' --embed-metadata -x --audio-format mp3 $USERVAR -o '%(title)s.mp3' > /dev/null 2>&1 
name=$(yt-dlp --get-filename -o "%(title)s.%(ext)s" $USERVAR | sed 's/webm/mp3/')
touch "$name"
#>output.log 2>&1 &
echo "runing space"
/home/steff007/pys/space


echo "done with $COMP"
