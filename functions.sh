#!/usr/bin/env bash
p() { printf '%s\n' "$1"; }
se () {    history | rg -i $1; }
manv () { man $1 | v -c 'set nonumber' - }
#wi () { whereis $1}
ex () { exiftool -j $1 | v - }
lcd () { 
  echo  ${FUNCNAME[0]}
  ls -d */
}
take () { mkdir -p -- "$1" && cd -P -- "$1"; } 
rgg () { rg $1 /mnt/c/all/gcloud_his $HISTFILE }

chah()  {
fda -tf -L --changed-within=$1hours |  rg -v "tld|conf|\.git|hyp|cache|\.local" | xargs stat -c "%y/%n" | sort | sed -e "s/[0-9]*\:.*00\///g" }
cham() {
fda -tf -L --changed-within=$1minutes |  rg -v "tld|conf|\.git|hyp|cache|\.local" | xargs stat -c "%y/%n" | sort | sed -e "s/[0-9]*\:.*00\///g" }
hit() { history | tail -n $1 }

#https://raw.githubusercontent.com/nickjj/dotfiles/master/.config/zsh/.aliases
vdiff () {
    if [ "${#}" -ne 2 ] ; then

        printf "vdiff requires two arguments"
        echo "  comparing dirs:  vdiff dir_a dir_b"
        echo "  comparing files: vdiff file_a file_b"
        return 1
    fi

    local left="${1}"
    local right="${2}"

    if [ -d "${left}" ] && [ -d "${right}" ]; then
        nvim +"DirDiff ${left} ${right}"
    else
        nvim -d "${left}" "${right}"
    fi
}

gits () {
  printf '%s\n' "git status -vv | v -"
  read
  git status -vv | nvim -
}

glst () {
  printf '%s\n' "git log --stat | vim -"
  read
  #git log --stat | nvim -
}
he() 
{ 
  eval '$1 --help | nvim -' 
}
function myip() {
        curl http://icanhazip.com      

        ip addr | grep inet$IP | \
        cut -d"/" -f 1 | \
        grep -v 127\.0 | \
        grep -v \:\:1 | \
        awk '{$1=$1};1'
}

hisf () {
	omz_history | cut -c 1-7 --complement > hf
}
