const Brain = require (`brain.js`)
const Network = new Brain.NeuralNetwork()
Network.train([
    {input:{r: 1, g: 1, b: 1}, output: {light: 1, dark: 0}},
    {input:{r: 1, g: 1, b: 1}, output: {light: 1, dark: 0}},
    {input:{r: 1, g: 1, b: 1}, output: {light: 1, dark: 0}},
    {input:{r: 1, g: 1, b: 1}, output: {light: 1, dark: 0}},
    {input:{r: 1, g: 1, b: 1}, output: {light: 1, dark: 0}},
    {input:{r: 0, g: 0, b: 0}, output: {light: 0 ,dark: 1}},
    {input:{r: 0, g: 0, b: 0}, output: {light: 0 ,dark: 1}},
    {input:{r: 0, g: 0, b: 0}, output: {light: 0 ,dark: 1}},
    {input:{r: 0, g: 0, b: 0}, output: {light: 0 ,dark: 1}},
    {input:{r: 0, g: 0, b: 0}, output: {light: 0 ,dark: 1}},
])

function getRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });
  
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: Math.round(parseInt(result[1], 16) / 2.55) / 100,
        g: Math.round(parseInt(result[2], 16) / 2.55) / 100,
        b: Math.round(parseInt(result[3], 16) / 2.55) / 100,
    } : null;
  }

const RGB = getRgb()
const result = Network.run({r: 0, g: 0, b: 0})


const example = document.getElementById("example")
const input = document.getElementById("color")
input.addEventListener(`change`, e => {
    example.style.backgroundColor = e.target.value
})
