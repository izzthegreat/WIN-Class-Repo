//Start with the following code template. After each step, run the program and see how the output changes.

function outer(){
  var a = 'a';
  var b = {string:'b'};
  console.log (a,b)
  function inner (a,b) {
    console.log (a,b)
    var a = 'b, actually.';
    var b = {string:'a, now that you mention it.'};
   console.log (a,b);
   b.string = 'no, it really was b';
  }
  inner(a,b);
  console.log (a,b);
}
outer();

/*
  1.Declare two variables, a and b in the outer function's scope and set them to a string and an object respectively. Log their values immediately.
  a {string:'b'}
  2.Log the values of a and b in the inner function.
  a {string:'b'}
  a {string:'b'}
  3.Update the inner function to take two parameters named a and b.
  a {string:'b'}
  a {string:'b'}
  4.Pass a and b in as arguments when you execute inner().
  a {string:'b'}
  a {string:'b'}
  5.Inside the inner function, assign new values to a and b and log them at the end of the function AND after the execution of inner(a,b).
  a { string: 'b' }
  a { string: 'b' }
  b, actually. { string: 'a, now that you mention it.' }
  a { string: 'b' }
  6.Inside the inner function, update a property of the b object.
  a { string: 'b' }
  a { string: 'b' }
  b, actually. { string: 'a, now that you mention it.' }
  a { string: 'b' }
*/