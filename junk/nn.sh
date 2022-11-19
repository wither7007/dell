#!/bin/bash

red=$'\033[1;31m'
nc=$'\033[0m'
printf '%s\n' $1 "${red}Test 1$nc"
printf '%s\n' 'all done'
