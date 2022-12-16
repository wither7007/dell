#!/usr/bin/bash

echo "---------------------------------------------------------------------------------------------------------" &>>/home/steff007/speed/spe
echo $(date) &>>/home/steff007/speed/spe
echo "***********************" &>>/home/steff007/speed/spe
/home/steff007/.local/bin/speedtest &>>/home/steff007/speed/spe
echo -en '\n' &>>/home/steff007/speed/spe
echo "=======================" &>>/home/steff007/speed/spe
echo $(date) &>>/home/steff007/speed/spe
echo -en '\n' &>>/home/steff007/speed/spe
