#!/bin/bash

#Fri Dec  9 17:05:06 CST 2022
pyse()
{
fd -a -epy -E mcoding |xargs rg "$1"
}
lib()
{
echo 21972086245722 | cl
}
cputest()
{
  sysbench cpu run > ~/cputest/$(date | sed 's/\s/_/g' | sed 's/_CDT.*//g')cpu.txt
}

f2() {
  echo "fd -a -tf --changed-within 2d | more"
fd -a -tf --changed-within 2d | more
}
wind(){
fdi -a -d 1 "$1" | sed 's|\/mnt\/c|c\:|' | sed 's|\/|\\|g'
}
ltv()
{
 ls -lhrt | awk '{print $9}'  | nvim -
}
winf()
{
fd -a "$1" | sed 's.\/mnt\/c.c\:.' | sed 's.\/.\\.g'
}
ltvs()
{
 ls -lhrt | awk '{print $9, "--" $5}'  | nvim -
}
esc()
{
cat "$1" | sed "s,\x1B\[[0-9;]*[a-zA-Z],,g" | nvim -
}
fdmp()
{
fileN=$( date +"%m-%d-%H-%M-%S""_mps.txt" )
( find /mnt/c/ -regex '.*\.\(mp4\|mp3\)' > /mnt/c/temp/$fileN 2>/mnt/c/temp/yy &)
}
myst() {
stat "$1" --format='acc: %x mod: %y  change: %z'
}
sq3() {
sqlite3 "$1" -cmd ".tables" -cmd ".mode column"
}
deci() {
echo "$1" | rev | sed -E 's/([0-9]{3})/\1,/g' | rev
}
exd() {
exiftool -j "$1" | jq '.[0] | { Description }' | sed 's/\\n/\n/g' | v - #!good description
}

pyclean () {
        find . -type f -name "*.py[co]" -delete
        find . -type d -name "__pycache__" -delete
}
gitree() {
echo "git log --oneline --graph --decorate --all"
git log --oneline --graph --decorate --all
}
#https://shallowsky.com/blog/linux/cmdline/sed-insert-commas.html
vman() {
man "$1" | nvim -
}	
windir () {
pwd | sed 's.\/mnt\/c.c\:.' | sed 's.\/.\\.g' | v -
}
p() { printf '%s\n' "$1"; }
se () {    history | rg -i "$1"; }
manv () { man "$1" | v -c 'set nonumber' - ; }
#wi () { whereis "$1"}
ex () { exiftool -j "$1" | v - ;}

gith(){
git "$1" --help | nvim - 
}
lcd () { 
  echo  ${FUNCNAME[0]}
  ls -d */
}
take () { mkdir -p -- "$1" && cd -P -- "$1"; } 
rgg () { rg "$1" /mnt/c/all/gcloud_his $HISTFILE ;}

chah()  {
fd -H -I -tf -L --changed-within=$1hours |  rg -v "tld|conf|\.git|hyp|cache|\.local" | xargs stat -c "%n   %.19z" | sort | sed -e "s/[0-9]*\:.*00\///g" ; }
cham() {
fd -H -I -tf -L --changed-within=$1minutes |  rg -v "tld|conf|\.git|hyp|cache|\.local" | xargs stat -c "%y/%n" | sort | sed -e "s/[0-9]*\:.*00\///g"; }
hit() {
  history | tail -n "$1"; 
}

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
	omz_history | cut -c 1-7 --complement > ~/hf
}

awsq () {
  #awk '!a[$0]++' ~/.sqlite_history > testfile.tmp && mv testfile.tmp ~/.sqlite_history
  nvim ~/.sqlite_history -c "normal Gzz"  
}
phis () {
  nvim ~/.python_history -c "normal Gzz"
}
