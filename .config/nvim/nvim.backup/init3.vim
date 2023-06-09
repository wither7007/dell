map <F8> a<C-R>=expand("%:p")<CR><Esc>
"map gn :bn<cr>
noremap Y 0vg_y
  inoremap <silent><expr> <c-l> coc#refresh()
  inoremap <silent><expr> <c-@> coc#refresh()
" Remap a few keys for Windows behavior
imap jj <Esc>
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
map <C-V>      "+gP
"map ctrl c and v to windows
"map ctrl c and v to windows
  tnoremap <Esc> <C-\><C-n>
  tnoremap <M-[> <Esc>
  tnoremap <C-v><Esc> <Esc>
"some crazy vimbuffer map
"vmap <C-c> :w! ~/.vimbuffer \| !cat ~/.vimbuffer \| clip.exe <CR><CR>
nmap <F9> :set ignorecase! ignorecase?
tnoremap <F6> :exec '!'.getline('.')
tnoremap <A-h> <C-\><C-n><C-w>h
tnoremap <A-j> <C-\><C-n><C-w>j
tnoremap <A-k> <C-\><C-n><C-w>k
tnoremap <A-l> <C-\><C-n><C-w>l
nnoremap <A-h> <C-w>h
nnoremap <A-j> <C-w>j
nnoremap <A-k> <C-w>k
nnoremap <A-l> <C-w>l
tnoremap <Esc> <C-\><C-n>
