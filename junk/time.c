#include <stdio.h>
#include <sys/stat.h>
#include <time.h>

int main()
{
    struct stat filestat;

    stat("test.txt",&filestat);
    /* newline included in ctime() output */
    printf(" File access time %s",
            ctime(&filestat.st_atime)
          );
    printf(" File modify time %s",
            ctime(&filestat.st_mtime)
          );
    printf("File changed time %s",
            ctime(&filestat.st_ctime)
          );
    /*printf("  File birth time %s",*/
            /*ctime(&filestat.st_birthtime)*/
          /*);*/

    return(0);
}
