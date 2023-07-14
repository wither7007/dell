if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi
cd ~
unsetopt BEEP
export ZSH="/home/steff007/.oh-my-zsh"
export python="/usr/bin/python3.10"
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
source "$HOME/.cargo/env"
source ~/functions.sh
#source ~/path
PATH=/opt/bld:/usr/local/bin:/bin:/home/steff007:/home/steff007/.cargo/bin:/home/steff007/.local/bin:/home/steff007/jq:/home/steff007/script:/sbin:/usr/bin:/usr/games:/usr/lib/wsl/lib:/usr/local/bin:/usr/local/games:/usr/local/sbin:/usr/sbin:/mnt/c/projects/p3/work: 
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
export PROMPT='${COLOR_DIR}%~ ${COLOR_GIT}$(parse_git_branch)${COLOR_DEF}$ '
# Load version control information
