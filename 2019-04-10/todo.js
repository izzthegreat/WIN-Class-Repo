// Let's create a simple todo application

// Show an unordered list of todo's

// Show an input to enter a new todo

// Show a button to add a todo. When the button is clicked:

// The text from the input box is used to add a list item to the bottom of the list
// The text from the input box is cleared out.
// When the user clicks on a list item, it is removed

// Extra Credit: - When a list item is clicked, cross it out, then remove it after 1 second.

const button = document.getElementById('addItem')
const list = document.getElementById('list')
button.addEventListener('click', function(){ //Add To Do Button
    let input = document.getElementById('textField').value //Retrive Input Box Value
    list.appendChild(document.createElement('li')) //Create New List item 
    let newItem = list.children[list.children.length-1]
    newItem.innerHTML = input //Add Text Input to New List Item  
    newItem.addEventListener('click', function (){ //New List Item Responds to Click...
        newItem.setAttribute('style','text-decoration:line-through') //By Getting a Line Through It...
        setTimeout(function(){ //And After a Second...
            newItem.remove() //It Gets Deleted!!
        },1000)
    })
    document.getElementById('form').reset() //Clear The Text Box For The next Item
})