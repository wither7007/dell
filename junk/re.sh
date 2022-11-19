#!/bin/bash
#echo  "C:\Users\San.Tan\My" | sed -e 's/C:\\/mnt\/c\//;s/\\/\//g' | sed 's/[A-Z]/\L&/g'
#echo  $1 | sed 's/[A-Z]/\L&/g' | sed -e 's/c:\\/mnt\/c\//;s/\\/\//g' 
echo $1 | sd 'c:\\' 'mnt/c/'
