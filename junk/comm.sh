#! /bin/bash -v
echo "the script name is $0"
echo "process is $$"
printf '%s\n' "all arguments are $@"
printf "%s\n" "parameters are $#"
printf "%s\n" "first parameter is ls $1 \n ls $2"

