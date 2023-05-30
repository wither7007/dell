/*  chunk.c  A combination of head and tail for ease of use.
 *  A derivation of an exercise of writing a tail command in K&R.
 *
 *  The largest chunk can be MAXLINES long, and files can be arbitrarily long
 *  (in lines). (see show_help())
 *
 *  Arguments:
 *    -n       Regular tail
 *    -n +m    tail, starting from line -n from the end, than a chunk of m lines.
 *    +n       Like head, print n lines from the start.
 *    +n m     Like head, print line m inclusive line n from m to n .
 *
 *
 *  (c) 2023 McUsr -- Vim licence.
 *
 *  To compile:
 *  cc -o chunk chunk.c
 *
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>
#define PNAME "\033[1mchunk\033[0m"
#define MAXLINES 5000       /* max #lines to be sorted */
#define MAXLEN 1000   /* max length of any input line */

#define FALSE 0
#define TRUE 1
int OVFLW=FALSE; /* a flag for buffer overflow, the buffer becomes a ring buffer. */
FILE *in;
const unsigned char REG_TAIL=0x1, CHUNK_TAIL=0x2, TAIL=0x3, REG_HEAD=0x4,CHUNK_HEAD=0x8,HEAD=0xC;
char *lineptr[MAXLINES];    /* pointers to text lines */



#define getchar() getc(in)
#define exit _Exit

#define MINUS '-'
#define PLUS '+'
#define NUL '\0' 
#define SPACE ' '
#define DIV '/'

#define NUMARG_EMSG "At least one  prefixed numeric argument is mandatory!\n"
#define ANY_PREFIX_EMSG "The first number must be prefixed with '+' or '-'!\n"

int main(int argc, char **argv)
{
    unsigned char OPER=0x0;
    void show_help() ;
    void execerror(char *s);
    void tailchnksz_error(int quantity ) ;
    void headsz_error(int offset ) ;
    void headchnksz_error(int quantity );
    int xtatou(char s[], char *prefix) ;
    int readlines(char *lineptr[], int nlines);
    void writelines(char *lineptr[], int nrlines, int offset, int quantity, const unsigned char OPER) ;

    in=stdin;

  /* blatantly die if no arguments! */
    if ( argc == 1 )
        execerror(NUMARG_EMSG) ;
  

  /* parsing for options ... */

    ++argv;
    --argc;

    char first_prefix = NUL, last_prefix=NUL ;
    int  offset=0, quantity=0 ;

    if (!strcmp(*argv,"-h")||!strcmp(*argv,"--help")) { 
        show_help() ; /* show help and exit.*/

    } else  {
        /* two arguments and input from stdin, we had three, dec by one = 2 */
        offset=xtatou(*argv,&first_prefix) ;

        if ( !offset )
            execerror(NUMARG_EMSG) ;
        else {
            ++argv;
            --argc;
        }


        if ( first_prefix != PLUS && first_prefix != MINUS ) 
            execerror(ANY_PREFIX_EMSG) ;
        else if ( argc > 0 ) {
            /* check second arg */
            quantity=xtatou(*argv,&last_prefix) ;
            if (quantity) { /* second_value is optional */
                ++argv ;
                --argc ;
                if ((!( first_prefix == MINUS && last_prefix == PLUS ))&& 
                    (!( first_prefix ==  PLUS && last_prefix == NUL)))
                        execerror("Bad combination of prefixes for the two arguments!\n") ;
                /* else we are running! */
            }
            if (( argc > 1 ) && (!strcmp(*(argv+1),"--" ))) {
                ++argv;
                --argc;
            }
        }
    }       
    
    /* defining the operation */
    if ( first_prefix == MINUS && (last_prefix == NUL || argc <= 1 ) )
        OPER=REG_TAIL;
    else if ( first_prefix == MINUS && last_prefix == PLUS ) { 
        OPER=CHUNK_TAIL;
        tailchnksz_error( quantity );
    } else if ( first_prefix ==  PLUS && last_prefix == NUL) {

        headsz_error( offset ) ;
        if (quantity > 0 ) {
            OPER=CHUNK_HEAD;
            headchnksz_error( quantity );
        } else
            OPER=REG_HEAD ;
    }

    int processed=0;    /* number of files processed */
    int nlines=0 ;      /* number of input lines read */
    for (;;) {
        int bad_file = FALSE ;
        if ( argc > 0 ) {
            if (!strcmp(*argv,"-") ) {
                if (processed > 0 ) {
                    in=stdin;
                } 
            } else if ( (in = fopen(*argv,"r") ) == NULL ) {
                fprintf(stderr,"%s: Can't open %s!\n",PNAME,*argv );
                bad_file = TRUE ;
            }
        }
        if (!bad_file) {
            /* showing chunks from  any files ... */
            if ((OPER & TAIL) != 0 ) 
                nlines = readlines(lineptr, MAXLINES);
            else { 

                nlines = readlines(lineptr, offset);
            }

             /* If OVFLW nlines is currently pointing to first line */
            writelines(lineptr, nlines,  offset, quantity, OPER);
        }

        ++processed ;
        if (argc <= 1 )
            break ;
        else {
            --argc;
            argv++ ;
        }
    } 

  return 0;
}
int xgetline(char *, int);

char *emalloc(size_t sz) ; /* check return from malloc */

/* readlines: read input lines */
int readlines(char *lineptr[], int maxlines )
 /* if maxlines < MAXLINES, it is safe to assume that we have
 *  gotten a plus argument  for starters, and should work like head.
 */
{
  int len, nlines;
  unsigned char OPERATION=0x0;
  char *p, line[MAXLEN];

  
  int like_head = (maxlines < MAXLINES ) ? 1 : 0 ;

  nlines = 0;
  while ((len = xgetline(line, MAXLEN)) > 0) {
    if (nlines >= maxlines ) {
        OVFLW=TRUE ;
        nlines = 0 ;  
    }

    p = emalloc(len); /* dies if a problem */

    line[len-1] = '\0';   /* delete newline */
    strcpy(p, line);

    if (OVFLW) free(lineptr[nlines] ) ;

    lineptr[nlines++] = p;

    if (like_head && (nlines >= maxlines) ) return nlines ;
  }
  return nlines;
}

/* getline: read a line into s, return length */
int xgetline(char *s, int lim)
{
  int c, i;

  for (i = 0; i<lim-1 && (c=getchar()) != EOF && c != '\n'; i++)
    s[i] = c;
  if (c == '\n')
    {
      s[i] = c;
      ++i;
    }
  s[i] = '\0';
  return i;
}

/* writelines: write output lines */
void writelines(char *lineptr[], int nrlines, int offset, int quantity, const unsigned char OPER)
{
  int i,last_line;
  /* wtf is offset?? 
   * offset was the number of lines we wanted to read.
   * quantity is the number of lines from there onwards we want to display.
   */

    if ((OPER & TAIL ) != 0 ) {

        last_line=nrlines-1;                      /* zero-based array */
          /* calculate first_line in buffer */

        int first_line = last_line - offset  + 1 ;    

        if (first_line < 0 &&  OVFLW )
            first_line = MAXLINES + first_line ;
        /*
        else
            first_line = 0 ;
            */

        int stop = ((OPER & CHUNK_TAIL ) == CHUNK_TAIL ) ? quantity : offset ;
        /* a chunck of the tail, starts at the beginning of the tail */

        /* It's the only difference, when a chunk, we only print the next n lines 
         * starting at the first line of the specified tail of the file.*/
        int cur_line;
        for (i=0,cur_line=first_line;i<stop;i++ ) {
            printf("%s\n",lineptr[cur_line++]) ;
            if (cur_line >= MAXLINES ) cur_line=0 ;
        }

    } else if ((OPER & REG_HEAD ) == REG_HEAD ) {
        /* special case when reading in HEAD, we stop
         * at the first MAXLINES bytes, no using the
         * array as a ringbuffer here. */ 

        int last = ( nrlines >= offset ) ? offset : nrlines ;

        for (i=0;i<last; )
            printf("%s\n",lineptr[i++]) ;

    } else if ((OPER & CHUNK_HEAD ) == CHUNK_HEAD ) {
     /* The meaning of this one, is that say we want 
      * the last twenty of the first 100 lines.
      */

        int last = ( nrlines < offset ) ? nrlines : offset ;

        int start = (( last - quantity ) < 0 ) ? 0 : (last - quantity ) ;  
        for (i=0;i<last;i++ )
            if ( i >= start )
                printf("%s\n",lineptr[i]) ;

    } else {
        fprintf(stderr,"%s:BIG BADABOM!! Can't happen, bad operations flag! %c\n",PNAME,OPER);
        exit(5) ;
   }

}
void tailchnksz_error(int quantity )
{
    if (quantity > MAXLINES)  {
        fprintf(stderr,"%s: Error: Can't display an endchunk bigger than MAXLINES (%d) lines!\n",PNAME,MAXLINES) ;
        exit(2) ;
    }
}
void headchnksz_error(int quantity )
{
    if (quantity > MAXLINES)  {
        fprintf(stderr,"%s: Error: Can't display a startchunk bigger than MAXLINES (%d) lines!\n",PNAME,MAXLINES) ;
        exit(2) ;
    }
}
void headsz_error(int offset )
{
    if (offset > MAXLINES)  {
        fprintf(stderr,"%s: Error: Can't display more than than MAXLINES (%d) lines of the start of a file!\n",PNAME,MAXLINES) ;
        exit(2) ;
    }

}

void execerror(char *s) /* print warning message */
{
    fprintf(stderr, "%s: Error: %s\n",PNAME,  s);
    exit(1) ;
/* abort() would give me a coredump/carcass */
}

char *emalloc(size_t sz) /* check return from malloc */
{ 
    char *tmp;
        tmp=(char *)malloc(sz) ;
    if (tmp==0)
        execerror("out of memory") ;
    return tmp;
}

/* xtoau: returns an unsigned, 0 if no number, NUL '\0'
 * if no prefix, otherwise '-', '+' or '/'.
 * Only the last argument can be prefixed with '+' and '/'
 * during list mode, only '+' * during the "-m +n" mode.
 * '-' only at the start arg during the "-m +n" mode.
 */
int xtatou(char s[], char *prefix)
{
    *prefix=NUL ;
    /* We look for a prefix: */
    if (strpbrk(&s[0],"+-/") == &s[0] ) {
        *prefix=s[0] ;
        s++ ;
    }
    int  n;
    for ( n = 0 ; isdigit(*s); s++ )
        n = 10 * n + (*s - '0' ) ;
    return n;
}

/* show_help: shows help and exits. */
void instructions(void) 
{

    printf("\n%s: display a chunk of an arbitrary long file with chunk size of max %d lines.\n"
           "\n    Syntax: %s [-h | -N | -N + M | +N | +N M ] FILE1..FILEn or \"-\" for stdin.\n"
           "\n    Options:\n"
           "\n        -h    : help (this)\n"
           "\n        -N    : Regular tail (man tail)\n"
           "\n        -N +M : tail, starting from \033[1mfile-len-N+1\033[0m from the end, through \033[1mfile-len -N + M\033[0m .\n"
           "\n        +N    : Regular head (man head)\n"
           "\n        +N M  : head starting from line \033[1mN-M+1\033[0m through line \033[1mN\033[0m.\n"
           "\n       (The \"+1\", is there, because of inclusive lines.)\n\n"
           ,PNAME,MAXLINES,PNAME);
}
void show_help(void)
{
    instructions() ;
    exit(0) ;
}
