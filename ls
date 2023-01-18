alias l="ls -CF"
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
