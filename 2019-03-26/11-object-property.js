const pointsJ = [
  { x: 1 / 2, y: 29 / 63 },
  { x: 1 / 2, y:  7 /  8 },
  { x: 1 / 4, y:  7 /  8 },
];

const pointsFormattedJ = [];

for (let i=0; i<pointsJ.length; i+=1) {
 const point = pointsJ[i]
  const fixedX = point.x.toFixed(3)
  const stringX = point.x.toString()
  const fixedY = point.y.toFixed(3)
  const stringY = point.y.toString()
  pointsFormattedJ[i] = `${stringX.length<fixedX.length ?stringX :fixedX}, ${stringY.length<fixedY.length ?stringY :fixedY}`;
}

const points = pointsFormattedJ.join(" ");
console.log(points);


  /*
const pointsFormattedJ = [];
for (TODO; TODO; TODO) {
  pointsFormattedJ[i] = `${TODO},${TODO}`;
}
const points = pointsFormattedJ.TODO;
console.log(points);
*/

