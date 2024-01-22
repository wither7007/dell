let @b='this is this is my thing'
set undodir=~\.config\nvim\undodir
" set undofile
"/home/steff007/.config/nvim/init.vim
"
"v C:\Users\jayst\.config\nvim\init.vim
"v /mnt/c/users/jayst/.config/nvim/init.vim
"handle silly quotes
"
"get current path in insert mode
inoremap \fp <C-R>=getcwd()<CR>
inoremap \fn <C-R>=expand("%:p:h")<CR>
let mapleader = ","
let g:user_emmet_leader_key=','
nnoremap <Leader>f ijim
nnoremap <Leader>o <C-w>o
nnoremap <leader> <Space> :nohlsearch<Bar>:echo<CR>
nnoremap <leader>a :suspend<cr>
nnoremap <leader>d ggVGy:q!
nnoremap <leader>t :w !clip.exe<CR>
vnoremap <leader>t :w !clip.exe<CR>
nnoremap <leader>x :tabclose!<CR>
nnoremap <leader>z :close!<CR>
noremap <leader>; vg_y
noremap <leader>n :%s#\\n#\r#g
noremap <leader>k 0cwkill -9 0v4ey
nnoremap <leader>0 gg0"ldG
"https://vim.fandom.com/wiki/Get_the_name_of_the_current_file#:~:text=In%20command%20mode%20(after%20typing,the%20name%20before%20the%20cursor).
noremap <leader>p :put =expand('%:p')
noremap <leader>l ^vg_y
noremap <leader>q :qa!<cr>
noremap <leader>w :wa<cr>:qa!
"nnoremap <Leader>m :%s/\//g
nnoremap <leader>m :%s///g<CR>
"remember ggggggg s!!!
map gl vg_y
map gn :bn<cr>
map gp :bp<cr>
map gD :bd<cr>
map gi /diff --git<cr>zz
map gx :set filetype=txt
"switch line to windows
map gws :s/\/mnt\/c\//c:\:s/\//\\/g
"copy file name and path to clip!!!
map gf :let @+ = expand("%:p")<cr>
set pastetoggle=<leader>o
vnoremap <leader>b "_x
set fileencoding=utf-8
set splitright
set autoindent
set showmatch
set smartindent
set smarttab
set shiftwidth=2
set softtabstop=2
set tabstop=2
set expandtab
set splitright
set hidden
"cool vim tip paste work d in insert
"Why visually select the line....and why :r!pwd even. Simply !!pwd on a line will replace it with the output of the pwd command. Personally my favorite external command setup is to mark the top of the region with an "a" mark the bottom of the region with a "s" and then :`a,`s !sort or any other command. Even better if you map a key to :`a,`s. E.g.

"map - :`a,`s
"mark region with "a" and "s"
"- !sort
"Capital y will copy without cr

"ap gw <C-W>_
"map to copy to end of line
"coc shortcut
  set updatetime=300
  set signcolumn=yes
set statusline+=%F
"Run current buffer
nnoremap <silent> <C-Right> <c-w>l
nnoremap <silent> <C-Left> <c-w>h
nnoremap <silent> <C-Up> <c-w>k
nnoremap <silent> <C-Down> <c-w>ji

"delete to blackhole
set list listchars=tab:\ \ ,trail:·
" Remap a few keys for Windows behavior
"source $VIMRUNTIME/mswin.vim
"no what space in vim diff
set diffopt+=iwhite
"use system clipboard
set clipboard=unnamed
set clipboard+=unnamedplus
" Use the internal diff if available.
" Otherwise use the special 'diffexpr' for Windows.
if &diffopt !~# 'internal'
  set diffexpr=MyDiff()
endif
" set the runtime path to include Vundle and initialize
"Plug 'mattn/emmet-vim'
"run current with python
"set hlsearch
"set search highlight
"set toggle space
set pastetoggle=<F2>
call plug#begin()
"Plug 'myhere/vim-nodejs-complete'
"Plug 'b3nj5m1n/kommentary'
Plug 'preservim/nerdcommenter'
" Plug 'neoclide/coc.nvim', {'branch': 'release'}
" Plug 'davidhalter/jedi-vim'
" Plug 'numToStr/Comment.nvim'
"Plug 'mattn/emmet-vim'
"Plug 'scrooloose/syntastic'
"Plug 'prettier/vim-prettier', { 'do': 'yarn install' }
"Plug 'itchyny/lightline.vim'
"Plug 'mhinz/vim-startify'
"Plug 'jupyter-vim/jupyter-vim'
"Plug 'valloric/youcompleteme'
"Plug 'https://github.com/jiangmiao/auto-pairs'
"Plug 'vim-scripts/bash-support.vim'
"Plug 'https://github.com/tpope/vim-commentary'
Plug 'https://github.com/vim-airline/vim-airline'
Plug 'https://github.com/AndrewRadev/linediff.vim'
"Plug 'https://tpope.io/vim/sensible.git'
Plug 'preservim/nerdtree'
Plug 'tpope/vim-surround'
"Plug 'https://github.com/scrooloose/nerdtree'
"Plug 'https://github.com/numEricL/nerdtree-live-preview'

"Plug 'jpalardy/vim-slime', { 'for': 'python' }
"Plug 'hanschen/vim-ipython-cell', { 'for': 'python' }
"Plug 'https://github.com/davidhalter/jedi-vim'
"Plug 'mattn/emmet-vim'
call plug#end()
"lua require('Comment').setup()
colorscheme elflord
hi Search guibg=peru guifg=wheat
hi Search cterm=None ctermfg=grey ctermbg=blue
imap jj <Esc>
let NERDTreeShowHidden=1
map <C-H> <C-W>h
map <C-J> <C-W>j
map <C-K> <C-W>k
map <C-L> <C-W>l
map <c-'> `
" map <C-U> <C-W>n:terminal<CR>
map <C-N> <C-W>n
"this automically runs?
"ls
map <silent> <C-t> :NERDTreeFocus<CR>


" select all

"--Emmet config
"redefine trigger key
"map ctrl c and v to windows

"map ctrl c and v to windows
"removed as fix?
"vnoremap <C-C> "+y
"map <C-V>      "+gP
"done
"select only text from line
noremap Y vg_y

if has('nvim')
  tnoremap <Esc> <C-\><C-n>
  tnoremap <M-[> <Esc>
  tnoremap <C-v><Esc> <Esc>
endif
set hlsearch
set incsearch
set nocompatible              " be iMproved, required
set noswapfile
set notimeout
set number
set pastetoggle=<C-O>
set path+=**
set showmode
set statusline="%f%m%r%h%w [%Y] [0x%02.2B]%< %F%=%4v,%4l %3p%% of %L"
set tabstop=2
set visualbell
set wildmenu
syntax on
syntax on
"some crazy vimbuffer map
"vmap <C-c> :w! ~/.vimbuffer \| !cat ~/.vimbuffer \| clip.exe <CR><CR>
set pastetoggle=<F2>
let s:clip = '/mnt/c/Windows/System32/clip.exe'  " change this path according to your mount point"
"autocmd TextYankPost * if v:event.operator ==# 'y' | call system('cat |' . s:clip, @0) | endif
au GUIEnter * simalt ~x
set nobackup       
set nowritebackup 
set noswapfile  
"set shell=powershell
set laststatus=2
"set noundofile
command! WipeReg for i in range(34,122) | silent! call setreg(nr2char(i), []) | endfor
"set pythonthreedll=python39.dll
"set pythonthreehome=C:\Python39
"use f9 to switch case settings
set ignorecase
nmap <F9> :set ignorecase! ignorecase?
"terminal stuff from https://betterprogramming.pub/setting-up-neovim-for-web-development-in-2020-d800de3efacd#:~:text=For%20macOS%20and%20Linux%2C%20the,vim%20.
" use alt+hjkl to move between split/vsplit panels
tnoremap <A-h> <C-\><C-n><C-w>h
tnoremap <A-j> <C-\><C-n><C-w>j
tnoremap <A-k> <C-\><C-n><C-w>k
tnoremap <A-l> <C-\><C-n><C-w>l
nnoremap <A-h> <C-w>h
nnoremap <A-j> <C-w>j
nnoremap <A-k> <C-w>k
nnoremap <A-l> <C-w>l
set splitright
set splitbelow
" turn terminal to normal mode with escape
tnoremap <Esc> <C-\><C-n>
" start terminal in insert mode
au BufEnter * if &buftype == 'terminal' | :startinsert | endif
" open terminal on ctrl+n
function! OpenTerminal()
  split term://wt -w 0 nt -d .
  resize 10
endfunction
nnoremap <c-n> :call OpenTerminal()<CR>
" Emoji shortcuts
hi Search ctermbg=red
