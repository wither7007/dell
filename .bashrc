# If set, the pattern "**" used in a pathname expansion context will
#misc functions
echo "frumious"
alias memHogsPs='ps wwaxm -o pid,stat,vsize,rss,time,command | head -10'

#export PATH=/home/steff007:$PATH
#export PATH=/home/steff007/.local/bin:$PATH
#export PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/usr/lib/wsl/lib:
export PATH="$HOME/pys:$PATH"
echo $PATH

# alias for python
#use for sd 
source "$HOME/.cargo/env"
#fix stupid corrupt history
source ~/scripts/zcorrupt.sh
#source ~/.bash_aliases
#figure out where old path comes from

source ~/path
source ~/functions.sh
#ln -s /usr/bin/python3.10 python3
printf '%s/n' "ttttttttttttttttttttttttttttt"
#export PS1="${cyan}\u@\h ${grey}\w ${cyan}\$ $reset"
