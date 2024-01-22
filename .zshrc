if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi
cd ~
unsetopt BEEP
export ZSH="/home/steff007/.oh-my-zsh"
export python="/usr/bin/python3.10"
export sheet="https://sheets.googleapis.com/v4/spreadsheets/1v0WTX_g0SEHb-EfG9faV3ayFo1WZUmUj8Lhgc2Kw2cA/values/data?alt=json&key=AIzaSyCZ3y8Es42zvNGON7ezA6q4dxe8RNcyQIs"
ZSH_THEME="robbyrussell"
plugins=(git zsh-autosuggestions)
source $ZSH/oh-my-zsh.sh
#
autoload -U colors && colors
PS1="%B%{$fg[red]%}[%{$fg[yellow]%}%n%{$fg[green]%}@%{$fg[blue]%}%M %{$fg[magenta]%}%~%{$fg[red]%}]%{$reset_color%}$%b "
PROMPT='%/ %# '
HISTSIZE=900000
SAVEHIST=900000
HISTFILE=/home/steff007/hist/history
HISTFILE=/mnt/c/projects/bhistory
export PYTHONSTARTUP=~/start.py
#/.cache/zsh/history
autoload -U compinit
zstyle ':completion:*' menu select
zmodload zsh/complist
compinit
bindkey -v
export KEYTIMEOUT=1
#setup fzf to use fd
export FZF_DEFAULT_COMMAND='fd -I --type f  --hidden --follow --ignore-file ~/.fdignore'
bindkey -M menuselect 'h' vi-backward-char
bindkey -M menuselect 'k' vi-up-line-or-history
bindkey -M menuselect 'l' vi-forward-char
bindkey -M menuselect 'j' vi-down-line-or-history
bindkey -v '^?' backward-delete-char
function zle-keymap-select {
  if [[ ${KEYMAP} == vicmd ]] ||
     [[ $1 = 'block' ]]; then
    echo -ne '\e[1 q'
  elif [[ ${KEYMAP} == main ]] ||
       [[ ${KEYMAP} == viins ]] ||
       [[ ${KEYMAP} = '' ]] ||
       [[ $1 = 'beam' ]]; then
    echo -ne '\e[5 q'
  fi
}
zle -N zle-keymap-select
zle-line-init() {
    echo -ne "\e[5 q"
}
zle -N zle-line-init
lfcd () {
    tmp="$(mktemp)"
    lf -last-dir-path="$tmp" "$@"
    if [ -f "$tmp" ]; then
        dir="$(cat "$tmp")"
        rm -f "$tmp"
        [ -d "$dir" ] && [ "$dir" != "$(pwd)" ] && cd "$dir"
    fi
}
bindkey -s '^o' 'lfcd\n'
autoload edit-command-line; zle -N edit-command-line
bindkey '^e' edit-command-line
[ -f "$HOME/.config/shortcutrc" ] && source "$HOME/.config/shortcutrc"
[ -f "$HOME/.config/aliasrc" ] && source "$HOME/.config/aliasrc"
source /usr/share/zsh/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh 2>/dev/null
#source ~/powerlevel10k/powerlevel10k.zsh-theme
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh
#remove dupes
#
setopt rm_star_silent
setopt HIST_EXPIRE_DUPS_FIRST
setopt HIST_IGNORE_DUPS
setopt HIST_IGNORE_ALL_DUPS
setopt HIST_IGNORE_SPACE
setopt HIST_FIND_NO_DUPS
setopt HIST_SAVE_NO_DUPS
tmux
source ~/.bash_aliases
#source ~/setup.sh
#source ~/functions.sh
# Avoid accidental deletion
#alias rm='rm -i'
#alias mv='mv -i'
#alias cp='cp -i'
# Prevent rm -f from asking for confirmation on things like `rm -f *.bak`.
export EDITOR=nvim
#source ~/functions.sh
source ~/script/functions.sh
#source ~/path
#changed 9-3 for go working
export PATH=/usr/lib:/usr/local/go/bin:/opt/bld:/usr/local/bin:/bin:/home/steff007:/home/steff007/.cargo/bin:/home/steff007/.local/bin:/home/steff007/jq:/home/steff007/script:/sbin:/usr/lib/wsl/lib:/usr/local/bin:/usr/local/games:/usr/local/sbin:/usr/sbin:/mnt/c/projects/p3/work: 

#PATH=/opt/bld:/usr/local/bin:/bin:/home/steff007:/home/steff007/.cargo/bin:/home/steff007/.local/bin:/home/steff007/jq:/home/steff007/script:/sbin:/usr/bin:/usr/games:/usr/lib/wsl/lib:/usr/local/bin:/usr/local/games:/usr/local/sbin:/usr/sbin:/mnt/c/projects/p3/work: 
export PYTHONPATH=/mnt/c/projects/p3/modules
printf '%s%s%s\n' $(date '+%F - %S')
printf 'epoch is %s\n' $(date '+%s')
#cputest
#change 3-6-23
function parse_git_branch() {
    git branch 2> /dev/null | sed -n -e 's/^\* \(.*\)/[\1]/p'
}

COLOR_DEF=$'%f'
COLOR_USR=$'%F{243}'
COLOR_DIR=$'%F{197}'
COLOR_GIT=$'%F{39}'
setopt PROMPT_SUBST
#export PROMPT='${COLOR_DIR}%~ ${COLOR_GIT}$(parse_git_branch)${COLOR_DEF}$ '
#export PROMPT='%F{blue}%1~%f %# '
# Load version control information
# add vsc to prompt
# https://www.themoderncoder.com/add-git-branch-information-to-your-zsh-prompt/
# Load version control information
autoload -Uz vcs_info
precmd() { vcs_info }

export nvm_dir="$home/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
# Format the vcs_info_msg_0_ variable
zstyle ':vcs_info:git:*' formats '[%b]'
# Set up the prompt (with git branch name)
setopt PROMPT_SUBST
PROMPT='${PWD/#$HOME/~} ${vcs_info_msg_0_} %# '

# bun completions
[ -s "/home/steff007/.bun/_bun" ] && source "/home/steff007/.bun/_bun"

# bun
export BUN_INSTALL="$HOME/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"
