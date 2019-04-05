const n = 4;
let sum = 0;
var i = 1;

while (i <= n) {
  sum += i ** 2;
  i++;
}

console.log(`${sum} is sum of squares of integers up to and including ${n}`);
