# TEST
### 4/29/19
#### Bryant Allen

## HTML/CSS

**1. What is Semantic HTML?**  
 ???

**2. What do data attributes do in HTML?**  
   They set certain defaults for the browser to better understand the site.

**3. What is the CSS Box Model?**  
   It shows the dementions of a particular HTML node, begining with the Margins on the outside, then the Border, the Padding and finally the Content in the middle.

**4. What is specificity in CSS?**  
   The priority with which styles are called on a single node. Classes in a style sheet have the lowest specificity and in-line styling has the highest.

**5. What are units of measurements in CSS?**  
   - px - Pixels  
   - vh - Percentage of View Height  
   - pt - Points  
   - % - Percentage of Container Dimensions

**6. What is a CSS Media query and what is it used for?**  
   ???

**7. What is the difference between padding and margins?**  
   The margin is outside of the border of an object. Padding is between the border and the content.

## JavaScript

**8. What is the difference between `=`, `==`, & `===`?**  
`=` - Declaration - Defines a variable  
`==` - Loose Equality - Compares values but not data types  
`===` - Strict Equality - Compares values AND data types

**9. Explain event bubbling.**  
???

**10. What are the primitive data types of JavaScript?**  
- Boolean
- Integer
- String
- Object
  
**11. What is the difference between `Undefined` and `Null`?**  
Undefined is a placeholder, waiting for data.  
Null is the absence of data.

**12. Write code for the following:**
```Javascript
let myStr = "Hello World!";
//Your Code
console.log(myStr); 
```
**With this output:**
> !dlroW OlleH

```Javascript
let myStr = "Hello World!";
myStr.reverse();
console.log(myStr); 
```

**13. What is the output and why?**
```Javascript
console.log("one");
setTimeout(function() {
    console.log("two");
}, 0)
console.log("three")
```
Output
>One  
>Three  
>Two

The setTimeout still causes a small delay even when set to 0ms.

**14. Debug this code and give the output:**
```Javascript
console.log("start");
for(var i=0; i<5; i++);
setTimeout(function(){
    console.log(i);
},0)
console.log("end");
```

Debugged:
```Javascript
console.log("start");
for(var i=0; i<5; i++){
    setTimeout(function(){
        console.log(i);
    },0)
}
console.log("end");
```
Output:
> start   
> 0  
> 1  
> 2  
> 3  
> 4  
> end 

The `for` loop doesn't have a body and outside of the loop the `console.log(i)` would return an error as `i` hasn't been declared as a global variable.

**15. For the given array, sort in ascending order, remove duplicates, and find numbers greater than a particular number (ex. > 3)**

`[8,7,5,3,3,0,9,1]`

```Javascript
let arr = [8,7,5,3,3,0,9,1]
arr.sort().???().filter((x) => x>3)
```