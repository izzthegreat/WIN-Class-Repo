// Get the top-level header element    
console.log(
    $('header')[0]
)

// Get all the section elements
console.log(
    $('section')
)

// Get the section element with class="current"
console.log(
    $('section.current')[0]
)

// Get the section that comes after the current section
console.log (
    $('.current').next()[0]
)

// Get the h2 node from the section before the 'current' section    
console.log (
    $('.current').prev().find('h2')[0]
)

// Get the div that contains the section that has an h2 with a class of 'highlight'
console.log (
    $('.highlight').parent().parent()[0]
)

// Get all the sections that contain an H2 and store them in an Array    
console.log(
    Array.from($('h2').parent())
)