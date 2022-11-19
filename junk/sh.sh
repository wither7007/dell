#!/usr/bin/sh -
comm="vimm"
if  command -v -- $comm > /dev/null 2>&1; then
  printf '%s\n' "$comm is a command"
  alias xx="echo xx is aliased"
else
  printf '%s\n' "$1 is not a command"
fi
