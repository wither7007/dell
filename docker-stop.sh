#!/bin/bash
#stop all dockers

docker stop $(docker ps -a -q) #!stop all images
docker rm $(docker ps -a -q) #!remove all images
