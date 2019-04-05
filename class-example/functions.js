var calculator = {
    add: function (a,b) {
        return a+b;
    }
}

console.log (calculator.add(2,3)) //5

//Anonymous function = a function with no name/keyword

var arrayWow = [
    ['anonymous', 'array'],
    {name: 'anonymous object'},
    function () {return 'anonymous function'}
]

console.log (arrayWow[0][1]) //array
console.log (arrayWow[1].name) //anonymous object
console.log (arrayWow[2]()) //anonymous function

function outer (){
    var x = 'x'
    function inner (){
        var y = 'y'
    }
    console.log (x)
    console.log (y)
}

// Nested Functions

var landscape = function() {
    var result = '';
    var flat =function(size) {
        for (var count=0; count < size; count++){
            result += " _ ";
        }
    }
    var mountain = function(size) {
        for (var count=0; count < size; count++){
            result += " /"
        }
        for (var count=0; count < size; count++){
            result += " '"
            result += "//"
        }
    }
    flat(3);
    mountain(4);
    flat(6);
    mountain(1);
    flat(1);
    return result

}
console.log (landscape())

var name = 'Jack'
var greet = function(){
    var name = 'Rose'
    console.log (name);
}
greet() //Rose
console.log (name) //Jack

function createFunction() {
    var a = "Hans Zimmer Rules!";
    inception = function() {
        console.log (a)
    }
}

var inception;
createFunction();
inception(); //"Hans Zimmer Rules!"

const teacher = {
    name: 'Jimmy',
    sayName: function() {
        console.log (this.name)
    }
};

teacher.sayName(); //Jimmy

/*
The Four scopes of 'this'

- Implicit
    ex: myObj.func();
    refers to myObj
- Explicit
    ex: func.bind(myObj){}
    refers to myObj
- new
    ex: var car = new func({})
    'this' is inside the function
- Global
    ex.: func( )
*/

function sayName() {
    console.log(this.name)
};

const teacher1 = {
    name: 'Jimmy',
    speak: sayName
}

const teacher2 = {
    name: 'Chris',
    speak: sayName
}

teacher1.speak();
teacher2.speak()