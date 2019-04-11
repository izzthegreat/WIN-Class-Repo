// - Create a Form and add validations using jQuery
// - Utilize the html and css provided below

// - Create a function that will fire when the **submit** `<button>` is *clicked*
// - Make sure the function loaded after the `DOM`
// - Inside the function:
// 	- create variables for each of the form inputs
// 		- use jQuery to accomplish this task
// 		- *(think about querySelector)*
// 	- create an `array` named *required*
// 		- store the variables you've **name**, **email**, and **phone number**
// 	- Utilize a `for` loop to iterate of the entire **required** `array`
// 	- Inside the `for` loop:
// 		- use an `if` statement to check the **value** of each array item
// 		- **if** the array item is equal to an empty string (`""`)
// 			- populate the `message` `<p>` with the following text: <br> *"Please Fill Out Required Fields"*
// 			-  add the **warning** `class` to this message
// 		- Attach the **warning** `class` to the array item's `<label>` <br> *note: You want the label to turn red, if the field is empty*
// 		- once the field has something *other* than a blank string. make sure the **warning** `class` is removed
// 	- close out the `for` loop
// 	- utilize another `if` statement
// 		- verify that no `<label>`'s have the **warning** `class`
// 		- if true
// 			- remove the `form` from the `DOM`
// 			- manipulate the `<h2>` to say: *"Thanks for your feedback!"*
// - close out your function
// - test it out!


$(document).ready(function(){ // Wait for the DOM
    $('#submit').on('click', function() { //Wait for the Submit button click
        // Save all of the input to variables
        const name = $('#name') 
        const eMail = $('#email')
        const phoneNum = $('#phone')
        const message = $('#message')

        // Store inputs in an array
        const required = [name,eMail,phoneNum]

        for (let i=0; i<required.length; i++){ // Iterate through the array to...
            if (required[i].val() === ''){ // ...Check that each field has input

                // If not, chastize user...
                $(message).text("Please Fill Out Required Fields").addClass('warning')
                required[i].prev().addClass('warning') // ...And identify empty fields
            } else {
                required[i].prev().removeClass() // If it is filled, unflagg the field
            }
        }
        if (!$("#form label").hasClass('warning')) { // Once all fields are validated...
            $("#form")[0].remove(); // Remove the form...
            $("#pre-form h2").text("Thanks for your feedback!") // ...And say "thank you"
        }
    })
})
