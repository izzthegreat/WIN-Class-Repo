

const list = document.querySelector('#list')
debugger
// Update the 'Coffee' item to say 'Fair Trade Coffee'
list.children[1].innerHTML = 'Fair Trade Coffee'

// Remove 'Twinkies' from the list
list.children[3].remove()

// Add an item 'Cheese Whiz'
list.appendChild(document.createElement('li'))
list.children[3].innerHTML = 'Cheez Whiz'

// Clear the list
while (list.children.length > 0){
    list.children[0].remove()
}

// Programmatically add items from the array `['protein powder', 'muscle milk', 'power bars']`
function bulkUp(){
    let proteinList = ['protein powder', 'muscle milk', 'power bars']
    proteinList.forEach(function(protein){
        list.appendChild(document.createElement('li'))
        list.children[proteinList.indexOf(protein)].innerHTML = protein
    })
}
bulkUp()

// Add the class 'important' to the muscle milk item.
list.children[1].setAttribute('class', 'important')