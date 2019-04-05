const pointsJ = [
  { x: 1 / 2, y: 29 / 63 },
  { x: 1 / 2, y:  7 /  8 },
  { x: 1 / 4, y:  7 /  8 },
];

const pointsFormattedJ = [];
for (let i = 0; i < pointsJ.length; i += 1) {
const {x,y} = pointsJ[i]

  // step 2
  // assign variables x and y by object destructuring
  const xToString = x.toString();
  const yToString = y.toString();

  // step 4
  const xToFixed3 = x.toFixed(3);
  const yToFixed3 = y.toFixed(3);

  // step 6
  // assign to xShorter the shorter string xToString or xToFixed3
  // assign to yShorter the shorter string yToString or yToFixed3

  pointsFormattedJ[i] = `${xToString.length<xToFixed3.length ?xToString :xToFixed3}, ${yToString.length<yToFixed3 ?yToString :yToFixed3}`;
}

const points = pointsFormattedJ.join(' ');
console.log(points);
