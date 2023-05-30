#include <stdlib.h>
#include <stdio.h>

int main() {
  void *ptr = malloc(4);
  printf("done \n");
  free(ptr);

  return 0;
}
