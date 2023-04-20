./fc.sh 
func
v fc.sh 
lt
./fc.sh 
func
lt
sc fc.sh 
func
ls
func
v fc.sh 
./fc.sh 
v fc.sh 
./fc.sh 
v fc.sh 
./fc.sh 
echo $SHELL
sudo appt install zsh
se 'install'
sudo app install zsh
sudo apt install zsh
chsh
su
sudo -i -u root
exit
h3
echo $SHELL
chsh
h3
whoami
sudo -i -u root
ls
exit
ls
h3
sudo -i -u root
ls
h3
als
lt
ld /bin
cd /bin
ld
la
cd zs
find .
cd bash
ld
ld -a
find . | column 
find . | column  | sort
find . |  sort | column
cd zsh
u
chsh -s /bin/zsh 
h3
sudo -i -u root
la
v .bashrc
la
exit
la
v .bashrc 
lt
v .bashrc 
h3
his
se 'apt'
sudo apt install tree
tree example
manv rm
se 'find'
find . -maxdepth 1
find . -maxdepth 1 -regextype egrep -regex 'man'
find . -maxdepth 1 -regextype egrep -regex '.*xxx.*'
find . -maxdepth 1 -regextype egrep -regex '.*'
find . -maxdepth 1 -regextype egrep -regex '.*m'
find . -maxdepth 1 -regextype egrep -regex '.*s'
find . -maxdepth 1 -regextype egrep -regex '.*vim'
grep -c 'man'
find . -maxdepth 1 | xargs grep 'man' -sl
v all
find . -maxdepth 1 | xargs grep 'frumious' -sl
find . -maxdepth 1 | xargs grep 'frumious' -sl #! good word search
find . -maxdepth 2 | xargs grep '.*xxx.*' -sl #! good word search
cd .cache/
lt
ls
u
h3
find . -maxdepth 2 | xargs grep '.*xxx.*' -sl #! good word search
find . -maxdepth 2 | xargs grep -rn '.*xxx.*' -sl #! good word search
find . -maxdepth 1 | xargs grep -rn '.*xxx.*' -sl #! good word search
find . -maxdepth 1 | xargs grep -n '.*xxx.*' -sl #! good word search
find . -maxdepth 1 | xargs echo grep -n '.*xxx.*' -sl #! good word search
grep "man"
man grep
grep -Hin man `find . -maxdepth 1 -type f`
grep -Hin '^man' `find . -maxdepth 1 -type f`
grep -Hin '^man' `find . -maxdepth 1 -type f` | v -
v a
his
tmux
tmux ls
se 'tmux'
cat >nn
lt
cat nn
rm nn
lt
sudo bash
sudo zsh
whoami
su bash
sudo bash
lt
cat fun 
sc fun 
manv pgrep
lt
sc ll
cat ll
source ll
v ll
se 'ps'
pstree
docker run -d -p 80:80 
    -v ./my-website:/usr/share/caddy/ 
    -v caddy-config:/config
    -v caddy_data:/data
    caddy:2
docker run -it --rm -d -p 8080:80 --name web nginx
docker ps -a
docker stop web
docker ps -a
mkdr site-content
mkdir site-content
cd site-content/
v index.html
docker run -it --rm -d -p 8080:80 --name web -v ~/site-content:/usr/share/nginx/html nginx
lt
v index.html 
docker ps -a
docker attach web
se 'docker'
docker container ls
docker container ls -a
cat /proc/self/cgroup
docker run -ti --rm ubuntu
u
i3
pip list
pip --version
pip3 list
pip3 list | column
exit
exit
sudo zsh
exit
h3
als
cat fun
se
h3
his
cat greekfile.txt
cat > greekfile.txt
alias | grep mtime
fday
alias | grep mtime
find -maxdepth 1 -mtime -1
find -maxdepth 1 -mtime -1 | grep -v '^\.'
find -maxdepth 1 -mtime -1 | grep -v 'two'
lt
lt | tail
grep -c "unix" greekfile.txt 
cat greekfile.txt 
grep -l
grep -l 'unix'
grep -maxdepth 1 -l 'unix'
find /dev -type c
ld
mkdir -p /tmp/test/level1dir{1..10}/level2dir{1..10}/level3dir{1..10}
tree
find . | grep tmp
se 'find'
find -mmin -5
find -mmin -10
find -mmin -20
find -mmin -20 | xargs echo
find -mmin -30 | xargs echo
find -mmin -30 | xargs ls
ld
find -mmin -30 | xargs cp -t junk/
cd junk
lt
find -t d
find -type d
find -type d | xargs echo
find -type d | xargs ls
find .
find . -type f -name "*.sh" -o -name "*.txt" 
u
find . -type f -name "*.sh" -o -name "*.txt" 
find . -maxdepth 1 -type f -name "*.sh" -o -name "*.txt" 
find . -empty 
tmux ls
find . -size 50k
wi clip
find . -type f -name "*.txt" -exec ls -l {} +
find . -maxdepth 1 -type f -name *.txt" -exec mv {} {}.old \;
find . -maxdepth 1 -type f -name *.txt" 
find . -maxdepth 1 -type f
find . -maxdepth 1 -type f -name *.txt" 
find . -maxdepth 1 -type f -name "*.txt" -exec mv {} {}.old \;
ls old
lt
find -maxdepth 1 -name "*.old"
find -maxdepth 1 -name "*.old" | xargs ls -l
h3
ls | xargs du -h
ls | xargs head -n 2
find -maxdepth 1 -type f | xargs head -n 2
find -maxdepth 1 -type f | xargs head -n 2 | v -
find -maxdepth 1 -type f | xargs grep -l unix
find -maxdepth 1 -type f | grep -v "repl" | xargs grep -l unix
find -maxdepth 1 -type f | grep -v "repl" | xargs -t grep -l unix
grep -l unix ./.zsh_history 
find -maxdepth 1 -type f | grep -v "repl" | xargs -p grep -l unix
docker ps
docker ps -q
ls *.sh
ls *.sh | xargs ls -l
ls *.sh | xargs head -n 1
find . -type f -name "*.txt" | xargs -I {} sh -c 'ls -l {}; du -h {}' 
find . -maxdepth 1 -type f -name "*.txt" | xargs -I {} sh -c 'ls -l {}; du -h {}' 
lt
find . -maxdepth 1 -type f -name "*.sh" | xargs -I {} sh -c 'ls -l {}; du -h {}' 
find . -maxdepth 1 -type f -name "*.sh" | xargs -I {} sh -c 'ls -l {}; du -h {}; stat' 
find . -maxdepth 1 -type f -name "*.sh" | xargs -I {} sh -c 'ls -l {}; du -h {}; stat {}' 
find . -maxdepth 1 -type f -name "*.sh" | xargs -I {} sh -c 'ls -l {}; du -h {}; stat {} | grep Access' 
find . -maxdepth 1 -type f -name "*.sh" | xargs -I {} sh -c 'ls -l {}; du -h {}; stat {} | grep "Access"' 
find . -maxdepth 1 -type f -name "*.sh" | xargs -I {} sh -c 'ls -l {}; du -h {}; stat {} | grep "Access.*2"' 
find . -maxdepth 1 -type f -name "*.sh" | xargs -I {} sh -c 'ls -l {}; du -h {}; stat {} | grep "Access.*2"' #! find example
se '#!'
find . -maxdepth 1 | xargs grep -l 'install'
find . -maxdepth 1 -type f | xargs grep -l 'install'
find . -maxdepth 1 -type f -name "*.sh" | xargs grep -l 'install'
find . -maxdepth 1 -type f -name "*.sh" | xargs grep -l 'install | xargs cat'
find . -maxdepth 1 -type f -name "*.sh" | xargs grep -l 'install' | xargs cat
h3
find . -maxdepth 1 -type f -name "*.sh" | xargs grep -l 'install' | xargs cat #!good find
ls *.sh
sc install.sh 
fd .
fd -H .
fd *.sh
fd "*.sh"
fd -esh
fd -h -esh
fd -H -esh
fd -H -esh | xargs ls -l
fd -H -esh | xargs head -n 1
cat /usr/bin/env
fd -H -esh | xargs head -n 1
ls | rg 'sh'
ls | rg -v 'sh'
se 'find.*sh'
fd -H -esh | xargs -I {} sh -c 'head -n 1'
fd -H -esh | xargs -I {} sh -c 'ls -l {}; du -h {}'
fd -H -esh | xargs -I {} sh -c 'stat {}'
stat -f /boot
stat --format=’%n’ 
ls
stat --format=’%n’ b.py 
stat --format='%n' b.py 
stat --format='%x' b.py 
stat --format='%n%x' b.py 
stat --format='%n %x' b.py 
stat --format='%n %x' $(ls)
stat --format='%n \t %x' $(ls)
stat --format='%n --- %x' $(ls)
manv stat
fd *.sh
fdh
fd -g *.sh
fdh
fd "x"
fd "sh"
fd "c.*sh"
fd "c.*sh" -x head n 1
fdh
fd -tf "c.*sh" -x head n 1
fd -tf "c.*sh" | xargs head n1
fd -tf "c.*sh" | xargs head n 1
ls | xargs head n 1
fd -tf "c.*sh" | xargs head -n 1
fd -tf -esh | xargs head -n 1
fd -H -tf -esh | xargs head -n 1
fd 'git'
fd -H 'git'
fd -H 'git' | xargs ls -l
fd -H -tf 'git' | xargs ls -l
time fd -H -tf 'git' | xargs ls -l
time fd -H -td 'git' | xargs ls -l
h3
fd -H -tf 'git' | xargs ls -l
cd .cache/
duh
cd yarn/
duh
df
df -h
uu
...
cd
als
se 'pop'
compgen -c | column
rg manv
rgh
rg -help
wi
wi rg
rg -help
man rg
rg --help
ls > lll &
lt
rm lll
rg install > inst &
ps
lt
ps
ps | rg 'tmux'
se 'ps\s-'
ps -edf | rg 'grep'
ps -edf
rg install
lt
rg insta install.sh
fdh
rgh
fd d 1
fd -d 1
fd -d 1 | xargs rg 'install'
fd -d 1 | xargs rg 'install\s'
fd -d 1 -tf | xargs rg 'install\s'
se 'xargs.*t'
fd -d 1 -tf | xargs -t rg 'install\s'
cd all
function take     mkdir -p "$argv[1]"; and cd "$argv[1]"
end
fun() { mkdir -p "$argv[1]"; and cd "$argv[1]"; }
take all
fun
h3
fun() { mkdir -p "$argv[1]"; cd "$argv[1]"; }
fun all
u
lt
rm -rf '[1]'/
lt
env | more
git clone git@github.com:wither7007/all.git
rmdir all
rm -rf all
git clone git@github.com:wither7007/all.git
cd all
lt
duh
find .
find . |  column
gst
duh
du -h
duh
fd 'mp4'
u
lt
sc install.sh 
touch ~/.cloudshell/no-apt-get-warning
md .cloudshell
touch ~/.cloudshell/no-apt-get-warning
cd all
df
du
du -h
duh
fdh
fd
fd -S 30k
fd -S 0k
fd -S -0k
fd -S +10k
 du note/power 
 du -h note/power 
duh
gst
duh > duh.txt
gst
alias | rg git
ga .
gst
gc
gst
git push
u
docker pull redis
docker images
wget 'https://hub.docker.com/layers/redis/library/redis/latest/images/sha256-e96c03a6dda7d0f28e2de632048a3d34bb1636d0858b65ef9a554441c70f6633?context=explore'
lt
curl 'https://hub.docker.com/layers/redis/library/redis/latest/images/sha256-e96c03a6dda7d0f28e2de632048a3d34bb1636d0858b65ef9a554441c70f6633?context=explore'
lt
rm 'sha256-e96c03a6dda7d0f28e2de632048a3d34bb1636d0858b65ef9a554441c70f6633?context=explore' 
lt
docker images
docker run redis
tmux ls
docker ps
docker stop 3955ae10bb7e
docker run redis
dokcer ps
docker ps
h3
docker run -d redis
docker ps
docker stop 3ff2365a7521
docker ps
me
ping 34.172.113.120
which ping
wi ping
ping
 sudo apt install iputils-ping
ping 34.172.113.120
ping google.com
ping -c 3 google.com
tmux rename-session bash
tmux rename-session fred
docker ps -q
docker stop $(docker ps -q)
docker run redis
docker ps
docker run  redis --name jim
docker run   --name jim redi
docker exec -it e01471a09809 /bin/bash
docker run   --name jim redis
h3
env
docker ps
docker ps -a
docker ps -aq
docker run   --name jim redis2
docker ps
h3
docker network ls
docker -ps -a
docker ps -a
docker logs a099372188cd
docker ps
docker stop a09
docker run   --name jim2 redis
docker ps
docker rm a099
docker ps -a
docker rm $(docker ps q)
docker rm $(docker ps -q)
docker ps -a
docker ps -aq
docker rm $(docker ps -aq)
docker ps -a
docker images
docker rmi dc7b
docker images
df -h
duh
alias duh
cd .npm
duh
cd _cacache/
lt
duh
fd -H
fd -H | xargs du -h
fd -H | xargs du -h | v -
cd
ip
i3
ls
fd
fd -epy
docker images
docker ps -a
duh
cd all
exit
tmux
his
ld
cd all
lt
ld
gst
u
lt
cat install.sh 
source install.sh 
fd .
duh
fd -H 'b.*his'
