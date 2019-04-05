function needs(){
    const needs = 'hugs'
    return closure;
    function closure(){
        console.log('someText' + needs);
    } 
}
needs()();


function outer(){
    var b = 10;
    function inner(){
        var a = 20;
        console.log (a+b)
    }
    return inner;
}
var x = outer();


var y = outer();
x()

(function(){
	var myVar = "look mom, private variables!";
	//Do some stuff with myVar...
})();

console.log(myVar); //undefined;

//Declare an add function
function add(number1, number2) {
	return number1 + number2;
}

//Declare a function that takes a function as an argument
function doMath(operation, number1, number2) {
	return operation(number1,number2);
}

//Pass a function into another.
var sum = doMath(add, 1, 2);


var students = [
	{name: 'Cam Newton', average: 90},
	{name: 'Ted Ginn', average: 58},
	{name: 'Greg Olsen', average: 82}
];

var passingStudents = students.filter(function(student){
	return student.average > 60;
});

passingStudents === [
	{name: 'Cam Newton', average: 90},
	{name: 'Greg Olsen', average: 82}
];

var passingStudents = students.find(function(student){
	return student.average > 60;
});

passingStudents === [
	{name: 'Cam Newton', average: 90}
];

var students = [
	{firstName: 'Cam', lastName: 'Newton'},
	{firstName: 'Ted', lastName: 'Ginn'},
	{firstName: 'Greg', lastName: 'Olsen'}
]

var fullNames = students.map(function(student){
	return student.firstName + ' ' + student.lastName;
})

fullNames === ["Cam Newton", "Ted Ginn", "Greg Olsen"]

