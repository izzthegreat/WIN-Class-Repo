let temperature = 90
let precipitation = "raining"
let indoors = false
console.log ("The temperature is " + temperature + " degrees."  )
if (temperature > 80 && precipitation === false) {
    console.log ("Time to swim!")
} else if (indoors) {
    console.log ("But we're inside. Time to swim!")
} else if ( temperature > 80 && precipitation) {
    console.log ("But it's " + precipitation + "!")
}