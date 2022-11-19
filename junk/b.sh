#!/bin/bash

arr=$(ls ~)
#echo $arr
for i in ${!arr[@]}; do
  echo arr[$i] is ${arr[$i]}
done
