#!/bin/bash
printf 'enter a number \n'
read a
if test -f $a; then
  printf '%s\n' "exits yes"
else
  printf '%s\n' "$a doesn't exist"
fi
printf '%s\n\n' "you entered $a"
printf '%s\n' "Enter non 1 number"
read b
if [ "$b" -ne 1 ]; then
  printf '%s\n' "$b is not equal to one"
fi
