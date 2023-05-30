#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <sys/stat.h>
#include <sys/types.h>

int main() {
   // printf() displays the string inside quotation
   //

void getFileCreationTime(char *path) {
    struct stat attr;
    stat(path, &attr);
    printf("Last modified time: %s", ctime(&attr.st_mtime));
}
   printf("Hello, World!");
  getFileCreationTime('modtime.c');
}
