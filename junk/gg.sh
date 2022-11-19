#! /bin/bash
exec 5> debug.log 
PS4='$LINENO: ' 
BASH_XTRACEFD="5" 
read -p "Enter the input: " val
zero_val=0
if [ "$val" -gt "$zero_val" ]
then
   echo "Positive number entered."
else
   echo "The input value is not positive."
fi
