" Vim with all enhancements

"weird puts this first  1 %    "~/.config/nvim/init.vim"      line 1

"source $VIMRUNTIME/vimrc_example.vim

"set hight light color
function! GotoJump()
  jumps
  let j = input("Please select your jump: ")
  if j != ''
    let pattern = '\v\c^\+'
    if j =~ pattern
      let j = substitute(j, pattern, '', 'g')
      execute "normal " . j . "\<c-i>"
    else
      execute "normal " . j . "\<c-o>"
    endif
  endif
endfunction
"https://vim.fandom.com/wiki/Jumping_to_previously_visited_locations
"call GotoJump()
let @b='Mon Oct 24 23:26:40 CDT 2022'

set undodir=~/.config/nvim/undodir
"move between buffers without saving
set hidden
" set undofile
"handle silly quotes
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
"Capital y will copy without cr
"map gn :bn<cr>
"ap gp :bp<cr>
"ap gd :bd<cr>
"ap gw <C-W>_
noremap Y 0vg_y
"coc shortcut
if has('nvim')
  inoremap <silent><expr> <c-l> coc#refresh()
else
  inoremap <silent><expr> <c-@> coc#refresh()
endif
  set updatetime=300
  set signcolumn=yes
set statusline+=%F
"Run current buffer
"delete to blackhole

set list listchars=tab:\ \ ,trail:·
" Remap a few keys for Windows behavior
source $VIMRUNTIME/mswin.vim
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
call plug#begin()
" Plug 'davidhalter/jedi-vim'
" Plug 'neoclide/coc.nvim', {'branch': 'release'}
" Plug 'numToStr/Comment.nvim'
"Plug 'b3nj5m1n/kommentary'
"Plug 'https://github.com/davidhalter/jedi-vim'
"Plug 'https://github.com/jiangmiao/auto-pairs'
"Plug 'https://github.com/tpope/vim-commentary'
"Plug 'https://tpope.io/vim/sensible.git'
"Plug 'mattn/emmet-vim'
"Plug 'mattn/emmet-vim'
"Plug 'mhinz/vim-startify'
"Plug 'valloric/youcompleteme'
"Plug 'vim-scripts/bash-support.vim'
Plug 'hanschen/vim-ipython-cell', { 'for': 'python' }
Plug 'https://github.com/scrooloose/nerdtree'
Plug 'https://github.com/vim-airline/vim-airline'
Plug 'itchyny/lightline.vim'
Plug 'jpalardy/vim-slime', { 'for': 'python' }
Plug 'jupyter-vim/jupyter-vim'
Plug 'myhere/vim-nodejs-complete'
Plug 'nvim-tree/nvim-tree.lua'
Plug 'preservim/nerdcommenter'
Plug 'prettier/vim-prettier', { 'do': 'yarn install' }
Plug 'scrooloose/syntastic'
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
map gd :bd<cr> 
map gn :bn<cr>
map gp :bp<cr>
map <silent> <C-t> :NERDTreeFocus<CR>

let mapleader = ","
nnoremap <leader>p :pu=execute('ls')
nnoremap <Leader>f :NERDTreeToggle<Enter>
nnoremap <Leader>x :bd!
nnoremap <leader>t :tabnew<CR>
nnoremap <leader>c :close!
nnoremap <leader> <Space> :nohlsearch<Bar>:echo<CR>
noremap <leader>l ^vg_y
noremap <leader>q :qa!<cr>
noremap <leader>w :wqa<cr>
noremap <leader>s :w:!source %
noremap <leader>n :enew
vnoremap <leader>b "_x
let g:user_emmet_leader_key=','
map <C-V>      "+gP
"--Emmet config
"redefine trigger key
"map ctrl c and v to windows
"map ctrl c and v to windows
"done
"select only text from line
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
" WSL yank support
" let s:clip = '/mnt/c/Windows/System32/clip.exe'  " change this path according to your mount point
" if executable(s:clip)
"     augroup WSLYank
"         autocmd!
"         autocmd TextYankPost * if v:event.operator ==# 'y' | call system(s:clip, @0) | endif
"     augroup END
" endif
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
" Emoji shortcuts
hi Search ctermbg=red
"autocmd VimLeave * :!echo "eeeeeeeeeeeeeeeeee"
autocmd VimLeave * :!echo "ok"
lua <<EOF
 print("Hello user! Welcome to Neovim!")
EOF
