const n = prompt('positive integer number');

let sum = 0;

for (let i = 1; i <= n; i += 1) {
  sum += Math.pow(i,2);
  // TODO assignment statement
}

console.log(`${sum} is sum of squares of integers up to and including ${n}`);
