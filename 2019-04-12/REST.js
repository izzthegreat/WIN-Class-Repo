/*
## Exercise 1: REST
Use jQuery to do the following things with the http://jsonplaceholder.typicode.com/ API.

- Create buttons that do each of the tasks below
- Render the results to the page in html elements.
- Hide the results from the previous actions

    - Get all posts
    - Get post with id of 10
    - Get the comments from post with id of 12 <br> *note: comments are part of a different data model, you'll need to structure your endpoint to ask for all of the comments that belong to post #12*
    - Get all the posts from user with id of 2
    - Create a new post and log the id generated for it by the server
    - Replace the post with id of 12 and render the responseJSON
    - Update the title of post with id of 12 and render responseJSON
    - Delete the post with id of 12 and render a success message
    - Display a list of posts.
    	- When the user clicks on a post, display all the comments from that post
    	- Display a link back to all posts
*/
const box = $('#whereStuffGoes')

// Get all posts
$('#getPosts').click(function(){
    $.get('http://jsonplaceholder.typicode.com/posts',  input => 
        box.html(input.map(function(post){
            return '<h3>' + post.title + '<br>by User ' + post.userId + '</h3><p>' + post.body + '</p><br>'
        })))
})

//Get post with id of 10
$('#get10').click(function(){
    $.get('http://jsonplaceholder.typicode.com/posts/10', post => 
        box.html('<h3>' + post.title + '<br>by User ' + post.userId + '</h3><p>' + post.body + '</p><br>')
    )
})

//Get the comments from post with id of 12
$('#getComments12').click(function(){
    $.get('https://jsonplaceholder.typicode.com/comments/?postId=12', input => 
        box.html(input.map(function(comment){
            return '<p>Name: ' + comment.name + '<br>Email: '+ comment.email + '</p><p>'+ comment.body + '</p>'
        })))
})

//Get all the posts from user with id of 2
$('#getUser2Posts').click(function(){
    $.get('https://jsonplaceholder.typicode.com/posts?userId=2', input =>
        box.html(input.map(function(post){
            return '<h3>' + post.title + '<br>by User ' + post.userId + '</h3><p>' + post.body + '</p><br>'
        })))
})

//Create a new post and log the id generated for it by the server
$('#createPost').click(function(){    
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            userId: 27,
            title: 'My New Post',
            body: 'This is my post. There are many like it but this one is mine.'
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(response => response.json()).then(json => box.html('<h3>Post ID: '+ json.id +'<br><br>' + json.title + '<br>by User ' + json.userId + '</h3><p>' + json.body + '</p><br>'))
})

//Replace the post with id of 12 and render the responseJSON
$('#replacePost12').click(function(){
    fetch('https://jsonplaceholder.typicode.com/posts/12', {
        method: 'PUT',
        body: JSON.stringify({
            userId: 27,
            id: 12,
            title: 'This is a Different Post',
            body: 'This post has different text. It had text before and now it has new text.'
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json()).then(json => box.html('<p>' + JSON.stringify(json) + '</p>'))
    // .then(response => box.html('<p>' + response.body + '</p>'))
})

//Update the title of post with id of 12 and render responseJSON
$('#patchPost12').click(function(){
    fetch('https://jsonplaceholder.typicode.com/posts/12',{
        method: 'PATCH',
        body: JSON.stringify({
            title: 'New Title',
        }),
        headers: {
            "Content-type" : "application/json; charset=UTF-8"
        }
    }).then(response => response.json()).then(json => box.html('<p>' + JSON.stringify(json) + '</p>'))
})

//Delete the post with id of 12 and render a success message
$('#deletePost12').click(function(){
    fetch('https://jsonplaceholder.typicode.com/posts/12',{
        method: 'DELETE',
    }).then(box.html('<h3>Post #12 has been deleted.</h3>'))
})

/*
Display a list of posts.
When the user clicks on a post, display all the comments from that post
Display a link back to all posts
*/
function getBetterPosts(){ //Button Click
    // Pull the list of posts
    $.get('http://jsonplaceholder.typicode.com/posts',  input => { 
        box.empty() //Clear the <div>
        input.forEach(post => {    //Iterate through the posts
            //^^"For Each"...Display the formatted  post in a <div>
            $('<div></div>').html('<h3>' + post.title + '<br>by User ' + post.userId + '</h3><p>' + post.body + '</p>').appendTo(box)
            let newPost = box.find('div')[box.find('div').length-1] //Select the new post
            newPost.addEventListener('click',function(){ //When you click a post...
                //...Pull the comments for that post...
                $.get('http://jsonplaceholder.typicode.com/comments?postId=' + post.id, input => {
                    box.html( //...and in the <div>...
                        '<h3>Post #'+ post.id +' Comments</h3>' +
                        input.map(function(comment){//...display each formatted comment
                            return '<p>Name: ' + comment.name + '<br>Email: '+ comment.email + '</p><p>'+ comment.body + '</p>'
                        })
                        //and a 'Back' button
                        + '<h3 onClick="getBetterPosts()">Back To List</h3>'
                    )
                })
                
        })
    })
})}
    
$('#getBetterPosts').click(function(){
    getBetterPosts()
})