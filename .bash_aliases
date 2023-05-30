#alias v="nvim -c 'so ~/.vimrc' "
#echo "aaliassssaliassssaliassssliassss"
alias als=' v ~/.bash_aliases'
alias apps='sudo apt list --installed'
alias axit='tmux kill-server'
alias bas="cd /mnt/c/all/bash"
alias c="clear"
alias cat="batcat"
alias cl='clip.exe'
alias cls="clear"
alias cm="cd /mnt/c"
alias curl="curl -L -s "
alias cx="chmod +x "
alias dcount="du -a | cut -d/ -f2 | sort | uniq -c | sort -nr | v -"
alias duh='du -h --max-depth=1'
alias e='echo $?'
alias ehis="v $(echo $HISTFILE)"
alias f1='fd --changed-within 1day'
alias fda="fd -H --no-ignore-vcs "
alias fdi="fd  -H -I "
alias fday="find ~ -mtime -1 -ls"
alias fdc="fd -H -I -d 1  -td | column"
alias fdf="fd -H -I -d 1  -tf | column"
alias fdh='fd --help | v -'
alias fm='vifm'
alias fp='find `pwd` -name '
alias ga='git add'
alias gb='git branch'
alias gba='git branch -a'
alias gc='git commit -v'
alias gca='git commit -v -a'
alias gcm='git checkout master'
alias gco='git checkout'
alias gcount='git shortlog -sn'
alias gcp='git cherry-pick'
alias gitsall="git status -vv | v -"
alias gl='git pull'
alias glg='git log --stat | v  -'
alias glgg='git log --graph --max-count=5'
alias gm='git merge'
alias gp='git push'
alias gr='grep'
alias grh='git reset HEAD'
alias grhh='git reset HEAD --hard'
alias gs='git switch'
alias gss='git status -s'
alias gst='git status'
alias gup='git fetch && git rebase'
alias gx='ga . && gc "initial"'
alias h1='history | tail -n 10'
alias h3="history | tail -n 30 | tac | nl | tac"
alias h5='history | tail -n 50'
alias hi='history'
#nvim -c "normal Gzz" ~/pys/ipy_linux3
alias his='hi |  cut -c 1-7 --complement | nvim -c "normal Gzz"  -'
alias hist='hi |  cut -c 1-7 --complement > ~/hist'
alias hn='hi | nvim -'
alias hp="hyperfine "
alias ht='hi | sort -rn | cut -c 1-7 --complement | nvim -'
alias i3='ipython3'
alias l="ls -lhrt"
alias la='ls -A'
alias ld='ls -la | grep "^d"'
alias ldr='ls -td -- */ | head -n 20 | column'
alias left='ls -t -1'
alias ldf='exa  -a --group-directories-first'
alias ll='ls -alF'
alias lln="ls -lhtr  --time-style long-iso | tac | cat -n | tac | sed -s 's/^\s*\([0-9]*\)\s*\(.*\)/[\1]  \2 [\1]/'g && pwd"
alias ls='ls --color=auto'
alias lt='ls -lhrt'
alias lta='ls -ahrt'
alias lts='ls --human-readable --size -1 -S --classify | tac'
alias mc='cd /mnt/c'
alias md='mkdir'
alias me='curl ifconfig.me && printf "\n"' 
alias mem='ps aux --sort -rss | nvim -'
alias mnt="mount | awk -F' ' '{ printf \"%s\t%s\n\",\$1,\$3; }' | column -t | egrep ^/dev/ | sort"
alias mp='cd /mnt/c/projects'
alias mps='cd /mnt/c/projects/'
alias nb='node --inspect-brk'
alias no='node'
alias nv='nvim'
alias ovim="nvim -u /home/steff007/.config/init.vim"
alias p3='/bin/python3.10'
alias pc='pwd |tr '\''\n'\'' '\'' '\'' | clip.exe'
alias pow='powershell.exe'
alias py="python"
alias rgh='rg -help | v -'
alias sc="source "
alias ssp="python3 -m http.server"
alias t7='tmux split-window -p 75'
alias u='cd ..'
alias v="nvim -u /home/steff007/.config/nvim/init.vim"
alias v='nvim '
alias vf="v ~/functions.sh"
alias vi='nvim '
alias vinit='nvim ~/.config/nvim/init.vim'
alias vip="v ~/.ipython/profile_default/startup/start.py"
alias vn='nvim -p ~/dotfiles/notes/n.txt ~/dotfiles/notes/pw.txt'
alias wi='whereis'
alias winh="cd /mnt/c/Users/jayst"
alias wip='/mnt/c/Users/jayst/AppData/Local/Programs/Python/Python310/Scripts/ipython3.exe'
alias y3='youtube-dl -x --audio-format mp3 '
alias y4='youtube-dl -f 18 '
alias zsort="du -sh * | sort -h"
alias t="touch "
alias shc="shellcheck"
alias fdd="fd -d 1"
alias vmn="nvim /mnt/c/all/note/notes"
alias sl="sqlite3"
alias heds="head -n8 $(ls *) | less -NX | v -"
alias sql="mysql -u root -pstars1"
alias python='python3.10'
alias memHogsPs='ps wwaxm -o pid,stat,vsize,rss,time,command | head -10'
alias vim="nvim"
alias lf="lfcd"
alias lfc="v ~/.config/lf/lfrc"
alias vset="v -O /mnt/c/Users/jayst/AppData/Roaming/Code/User/keybindings.json /mnt/c/Users/jayst/AppData/Roaming/Code/User/settings.json"
alias cdy="cd /mnt/c/you"
alias penv="pipenv --venv"
alias mdj="p3 /mnt/c/projects/django/mysite/manage.py "
alias bvlc="cd /mnt/c/Users/jayst/AppData/Roaming/vlc/lua/extensions/userdata/bookmarks/"
alias cd1="cd /mnt/c/projects/django_projects/locallibrary"
alias sqpy="nvim /mnt/c/projects/p3/modules/export.py  /mnt/c/projects/p3/modules/sql.py /home/steff007/.ipython/profile_default/startup/start.py"
alias codes="nvim /mnt/c/Users/jayst/AppData/Roaming/Code/User/keybindings.json /mnt/c/Users/jayst/AppData/Roaming/Code/User/settings.json"
#alias fdc="fd -H -I -tf -L --changed-within=24hours" 
alias fun="v ~/functions.sh"
alias cdir="cd '/mnt/c/Users/jayst/AppData/Local/Google/Chrome/User Data/Default' "
alias sup="v /mnt/c/Users/jayst/OneDrive/Documents/PowerShell/Microsoft.PowerShell_profile.ps1"
alias po="poetry"
