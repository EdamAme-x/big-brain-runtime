x = input();

putchar("f");
putchar("i");
putchar("z");
putchar("z");
putchar("b");
putchar("u");
putchar("z");
putchar("z");
putchar("!");
putchar(10);

for (i = 1; i <= x; ++i) {
  if (i % 3 == 0 && i % 5 == 0) {
    putchar(102);
    putchar(105);
    putchar(122);
    putchar(122);
    putchar(98);
    putchar(117);
    putchar(122);
    putchar(122);
    // => fizzbuzz
  } else if (i % 3 == 0) {
    putchar(102);
    putchar(105);
    putchar(122);
    putchar(122);
    // => fizz
  } else if (i % 5 == 0) {
    putchar(98);
    putchar(117);
    putchar(122);
    putchar(122);
    // => buzz
  } else {
    print(i);
    // => (raw number)
  }
  putchar(10);
  // => \n
}