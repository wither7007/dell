#!/usr/bin/env zsh
# George Ornbo (shapeshed) http://shapeshed.com
# License - http://unlicense.org
#
#https://gist.github.com/musale/751cfb132fe6ad05d3a5cc306d72465c
# Fixes a corrupt .zsh_history file
file="/home/steff007/.cache/zsh/history"
mv $file ~/.zsh_history_bad
#cp $file ~/.zsh_history_bad
strings -eS ~/.zsh_history_bad > $file
#R in capital gives an error so the solution
echo $file
fc -r $file
rm ~/.zsh_history_bad
