# ES6 Notes


### Template Literal
```javascript
console.log(`Hello! I'm a string
    continues on the next line `)
```
> Hello! I'm a string
>   continues on the next line

```javascript
const name = 'Bryant'
const day = 'Wednesday'

const instructor = {
    name: 'Chris',
    lesson: 'ES6',
    greet: function(){
        return `Hello ${this.name}, ${this.lesson} is ${day}.`
    }
}
```

### Interpolation


```JavaScript
console.log(`Hello ${name} hope ${day} goes well!`)
console.log(`Hello ${instructor.name}, ${instructor.lesson} is ${day}.`)
console.log(instructor.greet())
```
Hoisting - `var` always hoists itself

```javascript
function foo () {
    let x = true
    if (x) {
        var usingVar = `I'm ${x}ly using Var`
    }
    console.log(usingVar)
}

foo()
```
`const` can only be assigned once  
```JavaScript
const instructors = [`Jimm`,`Chris`]

instructors = [`James`, `Christopher`]
```
> TypeError: Assignment to constant variable

Const CAN change though

```JavaScript
instructors.push(`Jack`,`Jill`)
console.log(instructors)
```

Const also accepts capitalized declarations

```JavaScript
const Capital = `Raleigh`
```
### Default Parameters

```JavaScript
function hello(name = `Mystery Person`) {
    console.log(`Hello ${name}, it's me.
    I was wondering if after all these years you'd like to meet?`)
}

hello(`Bobby`)
```
> Hello Bobby, it's me.  
> I was wondering if after all these years you'd like to meet?

```JavaScript
hello()
```
> Hello Mystery Person, it's me.  
> I was wondering if after all these years you'd like to meet?


### Arrow Functions
```JavaScript
const teacher = {
    name: `Jimm`,
    speak: function () {
        //bind a function to a specific context
        let boundFunction = function (){
            console.log (`Later, my name is ${this.name}`)
        }.bind(this) //Bind `this` to the scope of the object
        
    //A bound Function will always run in bound context.
    setTimeout(boundFunction,1000)
    }
}

teacher.speak()

const teacher2 = {
    name: `Jimm`,
    speak: function () {
        //bind a function to a specific context
        let boundFunction =  () => 
            console.log (`Later, my name is ${this.name}`)
    //bound Function will always run in bound context
    setTimeout(boundFunction,1000)
    }
}
```
Arrow Functions bind lexically  
Lexical Binding binds to the scope of the definition, not the call 

```javascript
let students = [
    {name: `Hugo`},
    {name: `Candace`},
    {name: `Taylor`},
    {name: `Dimitri`}
]

let names = students.map(student => student.name)
console.log(names)
```

### `...` Rest Parameter

Takes in all arguments as an array

```javascript
function add (...numbers) {
    console.log(`rest parameters:`, numbers)
    var sum = 0
    numbers.forEach(function(number){
        sum += number
    })
    return sum
}

console.log(add(1,2,3,4,5,6,7,8))
```
Rest example on one line

```javascript
let addition = (...numbers) => numbers.reduce((sum,number) => sum += number, 0) 

console.log(addition(1,2,3,4,5,6,7,8))

function addStuff(x,y,...z){
    return (x + y) * z.length
}

console.log(addStuff(1, 2, `hello`, `world`, true, 99))
```
### Spread Operator

```javascript
let random = [`hello`, `world`, true, 99]
let newArray = [1, 2, ...random, 3]

console.log(newArray)
```

### Array Destructors

```javascript
var moreStudents = [`Julian`, `AJ`, `Matt`]
var x = moreStudents[0]
var y = moreStudents[1]
var z = moreStudents[2]

console.log (x,y,z)

let  [a,b,c] = moreStudents
console.log (a,b,c)

let [alpha, ,omega] = moreStudents
console.log (alpha,omega)

let [person, ...people] = moreStudents
console.log (person, people)

let completedHomework = () => {
    return [`Julian`, `AJ`, `Matt`]
}

let [one, two, three] = completedHomework()

console.log (one, two, three)
```
Also Works with objects

```javascript
let inspector = {
    name: `Clouseau`,
    email:`pink@panther.com`
}

let {name: who, email: to} = inspector

console.log (who)
```

### Prototypes/Classes

```javascript
//ES5 Way
function Dude (name, job) {
    this.name = name
    this.job = job
}

Dude.prototype.getName = function () {
    return this.name
}

Dude.prototype.getJob = function () {
    return this.job
}

var goodGuy = new Dude (`Aang`, `Airbender`)
console.log(`${goodGuy.getName()} is an ${goodGuy.getJob()}`)


//ES6 Way
class Bender {
    constructor (name, element) {
        this.name = name
        this.job = `${element}bender`
    }
    getBender () {
        return this.name
    }
    getBent () {
        return this.job
    }
}

let badGuy = new Bender (`Zuko`, `Fire`)
console.log(`${badGuy.getBender()} is a ${badGuy.getBent()}`)

class Person {
    constructor (name, job) {
        this.name = name
        this.job = job
    }
    getName () {
        return this.name
    }
    getJob () {
        return this.job
    }
}

class SuperHero extends Person {
    constructor (name, heroName, superPower){
        super(name)
        this.heroName = heroName
        this.superPower = superPower
        }
    secretIdentity(){
        return `${this.heroName} is ${this.name}.`
    }
}

let batman = new SuperHero (`Bruce Wayne`,`Batman`, `Money`)
console.log(batman.secretIdentity())

class Guy {
    constructor (name) {
        this.name = name
    }
    set name(name) {
        this._name = name
    }
    get name() {
        return this._name
    }
}

let otherGuy = new Guy(`Jim Gordon`)
console.log(otherGuy.name)
otherGuy.name = `James Gordon`
console.log(otherGuy.name)


let kid = {name:`Aaron`}
let status = new Map()
status.set(kid.name, `Bill`)
status.set(`feeling` , `churlish`)
console.log(status.get(kid.name))
console.log(status.get(`feeling`))
console.log(status)
```