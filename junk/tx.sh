#! /bin/bash
#printf '%s\n' "stat $1"
stat --printf='mod: %y\tname: %n \n ' $1
