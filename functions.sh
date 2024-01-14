#!/bin/bash

#Fri Dec  9 17:05:06 CST 2022
export FZF_DEFAULT_COMMAND='fd . -tf -d 1 '
#fdi()
#{
#  printf '%s\n' "fd  -H -I "
#  fd  -H -I 
#}
fe() {
local files
  IFS=$'\n' files=($(fzf-tmux --preview='nvim {}' --query="$1" --multi --select-1 --exit-0))
  [[ -n "$files" ]] && nvim "${files[@]}"
}
big() {
(fdi --size +10m | xargs ls -lhrt | awk '{ print $5 " :  " $9 }' > big)
}
revparse()
{
printf '%s\n' "git rev-parse --abbrev-ref head --show-toplevel"
git rev-parse --abbrev-ref HEAD --show-toplevel
}
psa()
{
printf '%s\n' "ps -a"
ps -a
}
kills()
{
ps aux | awk '{print $11 $12 $13 "     kill -9 " $2 }' | nvim -
}
dud()
{
( duh > "$(date | sed 's/\s/_/g' | sed 's/_C.*//g')".txt 2>&1  & )
}
duc()
{
  (du -sh -- * | sort -rh > "$(date | sed 's/\s/_/g' | sed 's/_C.*//g')".txt 2>&1 &)
}
function frg {
      result=$(rg --ignore-case --color=always --line-number --no-heading "$@" |
        fzf --ansi \
            --color 'hl:-1:underline,hl+:-1:underline:reverse' \
            --delimiter ':' \
            --preview "bat --color=always {1} --theme='Solarized (light)' --highlight-line {2}" \
            --preview-window 'up,60%,border-bottom,+{2}+3/3,~3')
      file=${result%%:*}
      linenumber=$(echo "${result}" | cut -d: -f2)
      if [[ -n "$file" ]]; then
              $EDITOR +"${linenumber}" "$file"
      fi
    }
killst()
{
pgrep node | xargs kill -9 && ( npm run server > jserver.txt 2>&1  & )
}
pkill()
{
pgrep "$1" | xargs kill -9
}
mcut()
{
ffmpeg -ss 30 -i  "$1"  -acodec copy o"$1"
}
dpost()
{
cat db.json |jq 'del(.posts[] )' > temp && mv temp db.json
}
lsd()
{
ls -ltr | awk '{ print $9 }'
}
html()
{
curl "$1" >scratch.html && tidy scratch.html > temp || mv temp scratch.html
}

pretty()
{
npx js-beautify "$1" > temp && mv temp "$1"
}
tid()
{
  tidy "$1" > temp || mv temp "$1"
}
unq()
{
awk '!a[$0]++' "$1" > testfile.tmp && mv testfile.tmp "$1"
}
tw()
{
fdm --changed-within="$1"days | xargs ls -lhrt | awk '{ print $9 ": " $6 " " $7 " " $8}' | sort -k3
}
recv ()
{
fdm --changed-within="$1"days | xargs ls -lhrt | awk '{ print $9 " " $6 " " $7 " " $8}' | tac | sort | nvim -
}

recf ()
{
fdm --changed-within="$1"days | xargs ls -lhrt | awk '{ print $9 " " $6 " " $7 " " $8}' | tac | sort > /mnt/c/projects/left.txt
}
form ()
{
fmt -w 120 "$1" | nvim -
}
myman ()
{
cht.sh "$1" | perl -pe 's/\e([^\[\]]|\[.*?[a-zA-Z]|\].*?\a)//g' | nvim -
}
ppath ()
{
echo "$PATH" | perl -pe 's/:/\n/g' | sort #! split path"
}
ds ()
{
dirs -p >> ~/xd
}
dsc () 
{
awk '!a[$0]++' ~/xd > ~/testfile.tmp && mv ~/testfile.tmp ~/xd | sed  's/^/cd /g' ~/xd | nvim -
}
pql()
{
  echo "PGPASSWORD=stars1  psql -h localhost -p 5432 -U steff007 tempdb"
  PGPASSWORD=stars1  psql -L output.txt -h localhost -p 5432 -U steff007 tempdb
}

pqle()
{
  echo "PGPASSWORD=stars1  psql -h localhost -p 5432 -U steff007 tempdb"
  PGPASSWORD=stars1   psql -L nOutput.txt -E -h localhost -p 5432 -U steff007 tempdb
}
gitinit()
{
gignore
k='git init -b main && git add -A && git commit -m "Initial commit"'
echo $k
bash -c "$k"
}
qm()
{
ps -A --sort -rss -o comm,pmem | awk '
  NR == 1 { print; next }
  { a[$1] += $2 }
  END {
    for (i in a) {
      printf "%-15s\t%s\n", i, a[i] | "sort -rnk2";
    }
  }
'
}
deleteall()
{
k='find -mindepth 1 -maxdepth 1 -print0 | xargs -r0 rm -rf'
echo "$k"
bash -c "$k"
}
pyse()
{
fd -a -epy -E mcoding |xargs rg "$1"
}
qht()
{
k="wget https://raw.githubusercontent.com/wither7007/htmlTemplate/main/html/index.html && wget https://raw.githubusercontent.com/wither7007/htmlTemplate/main/html/style.css && wget https://raw.githubusercontent.com/wither7007/htmlTemplate/main/html/script.js && wget https://raw.githubusercontent.com/wither7007/htmlTemplate/main/html/.gitignore"
bash -c "$k"
}

lib()
{

echo 21972086245722 | cl
}

rec()
{
fdi --changed-within="$1"days --ignore-file ~/.fdignore | sort | awk '{ FS = "\\/" } ; { print $1 }' | uniq
}

frec()
{
fdm --changed-within="$1"hours -x ls -lhr | cut -d' ' -f5-13
}

recf()
{
fdi --changed-within="$1"hours --ignore-file ~/.fdignore -x ls -lhr | cut -d' ' -f5-13
}
cputest()
{
  sysbench cpu run > ~/cputest/"$(date | sed 's/\s/_/g' | sed 's/_C.*//g')"cpu.txt
}

f2() {
  echo "fd -a -tf --changed-within 2d | more"
fd -a -tf --changed-within 2d | more
}
wind(){
fdi --ignore-file ~/.fdignore -a -d 2 "$1" | sed 's|\/mnt\/c|c\:|' | sed 's|\/|\\|g' |  nvim -
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
se () {    history | rg -i "$1"; }
manv () { man "$1" | v -c 'set nonumber' - ; }
gith () { git help "$1" | v -c 'set nonumber' - ; }
#wi () { whereis "$1"}
ex () { exiftool -j "$1" | v - ;}

gith(){
git "$1" --help | nvim - 
}
take () { mkdir -p -- "$1" && cd -P -- "$1" || exit; } 
rgg () { rg "$1" /mnt/c/all/gcloud_his "$HISTFILE" ;}

chah()  {
fd -H -I -tf -L --changed-within="$1"hours |  rg -v "tld|conf|\.git|hyp|cache|\.local" | xargs stat -c "%n   %.19z" | sort | sed -e "s/[0-9]*\:.*00\///g" ; }
cham() {
fd -H -I -tf -L --changed-within="$1"minutes |  rg -v "tld|conf|\.git|hyp|cache|\.local" | xargs stat -c "%y/%n" | sort | sed -e "s/[0-9]*\:.*00\///g"; }
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
  read -r
  git status -vv | nvim -
}

glst () {
  printf '%s\n' "git log --stat | vim -"
  read -r
  #git log --stat | nvim -
}
he() 
{ 
  eval '$1 --help | nvim -' 
}
function myip() {
        curl http://icanhazip.com      

        ip addr | grep inet"$IP" | \
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
nh () {
  nvim ~/.node_repl_history 
}
gitshow () {
printf '%s\n' "git show --stat --oneline HEAD"
git show --stat --oneline HEAD
}
fday () {
  printf '%s\n' "find ~ -mtime -1 -ls | awk '{ print  \$11 }'"
  find ~ -mtime -1 -ls | awk '{ print  $11 }'
}
