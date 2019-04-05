// make a function that counts up to 100
// if divisible by 3 output what
// if divisible by 5 output up
// if divisible by both output both


let x=0;

for (x; x <=100; x ++) {
    let y = x%3
    let z = x%5
    if (y === 0 && z === 0) {
        console.log ("what up")
    } else
    if ( y === 0 ) {
        console.log ("what")
    } else
    if ( z === 0 ) {
        console.log ("up")
    } else {
        console.log (x)
    }
}