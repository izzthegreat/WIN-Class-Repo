const head = document.querySelector('header') // Get the header element
const sect = document.querySelectorAll('section') // Get all the section elements
const curr = document.querySelector('.current') // Get the section element with class="current"
const currNext = curr.nextElementSibling // Get the section that comes after the current section
const h2 = curr.previousElementSibling.children[0] // Get the h2 node from the section before the 'current' section
 // Get the div that contains the section that has an h2 with a class of 'highlight'
const complicated = document.querySelector('h2.highlight').parentElement.parentElement
// Get all the sections that contain an H2 (using a single statement);
const h2Moms = Array.from(document.querySelectorAll('section>h2')).map(function(node){return node.parentElement})

console.log (head)
console.log (sect)
console.log (curr)
console.log (currNext)
console.log (h2)
console.log (complicated)
console.log (h2Moms)