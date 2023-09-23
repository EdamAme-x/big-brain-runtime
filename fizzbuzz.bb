max = 100;

for (i = 1; i <= max; ++i) {
  if (i % 3 == 0 && i % 5 == 0) {
    putchar(102);
    putchar(105);
    putchar(122);
    putchar(122);
    putchar(98);
    putchar(117);
    putchar(122);
    putchar(122);
  } else if (i % 3 == 0) {
    putchar(102);
    putchar(105);
    putchar(122);
    putchar(122);
  } else if (i % 5 == 0) {
    putchar(98);
    putchar(117);
    putchar(122);
    putchar(122);
  } else {
    print(i);
  }
  putchar(10);
}