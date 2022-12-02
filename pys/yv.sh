#!/bin/bash
#utility to download you tube sound videos
# Ask the user for login details echo "Youtube Video Downloader"
#echo "--JJ------------------------"
#source ~/alpha-prj/alpha-venv/bin/activate
#source /mnt/c/all/bash/mp4/bin/activate
read -p 'Enter DL youtube video: ' USERVAR
echo "USERVAR IS: ${USERVAR}"

cd /mnt/c/you || exit
fd . -td -d 1 | column
cd - || exit
DIRY="git"
newdir="/mnt/c/you/$DIRY"
# USERVAR="https://www.youtube.com/watch?v=7LKy3lrkn"
#cd /mnt/c/projects/node/json-db-server
mkdir -p "$newdir"
cd $newdir || exit
echo "$(date)" ' - ' "$USERVAR" >>/mnt/c/you/dates.txt
yt-dlp -f "best[height<=?720]" --embed-metadata "$USERVAR" -o '%(title)s.%(ext)s' 
name=$(yt-dlp --get-filename -o "%(title)s.%(ext)s" "$USERVAR" | sed 's/webm/mp4/')
echo "$name"
touch "$name"

echo "runing space"
/home/steff007/pys/space
#> /dev/null 2>&1 &
#create json file for readb touch
#yt-dlp -j $USERVAR >b.json &
# yt-dlp -f "best[height<=?720]" --embed-metadata https://www.youtube.com/watch?v=i7ABlHngi1Q'%(title)s.%(ext)s'
#wait
echo "all done"
#python readb.py
#deactivate
