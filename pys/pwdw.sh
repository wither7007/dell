#!usr/bin/env bash
k=$(pwd)
printf "$k\n" | sd '/' '\' | sd '\\mnt\\c\\' 'c:\' |  win32yank.exe -i
