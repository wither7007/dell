#!/usr/bin/python3.10
# import argparse

# parser = argparse.ArgumentParser(description='Process some integers.')
# parser.add_argument('integers', metavar='N', type=int, nargs='+',
#                     help='an integer for the accumulator')
# parser.add_argument('--sum', dest='accumulate', action='store_const',
#                     const=sum, default=max,
#                     help='sum the integers (default: find the max)')
# args = parser.parse_args()
# print(args.accumulate(args.integers))

# Output when running: python3 your_script.py 1 2 3 4 --sum
# 10

from convert import decTime, fime
import pyperclip
import sys
print(sys.argv)
start=sys.argv[1]
finish=sys.argv[2]
name=sys.argv[3]
# print((sys.argv[1]))
print(f'ffmpeg -i {name}  -ss {fime(start)} -to {fime(finish)}  -vcodec libx264 -acodec copy x{name}')