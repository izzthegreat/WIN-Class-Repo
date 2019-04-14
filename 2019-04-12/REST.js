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

$('#getPosts').click(function(){
    $.get('http://jsonplaceholder.typicode.com/posts',  input => 
        $('#whereStuffGoes').html(input.map(function(post){
            return '<h3>' + post.title + '<br>by User ' + post.userId + '</h3><p>' + post.body + '</p><br>'
        })))
})

$('#get10').click(function(){
    $.get('http://jsonplaceholder.typicode.com/posts/10', post10 => 
        $('#whereStuffGoes').html('<h3>' + post10.title + '<br>by User ' + post10.userId + '</h3><p>' + post10.body + '</p><br>')
    )
})

$('#getComments12').click(function(){
    $.get('https://jsonplaceholder.typicode.com/comments/?postId=12', input => 
        $('#whereStuffGoes').html(input.map(function(comment){
            return '<p>Name: ' + comment.name + '<br>Email: '+ comment.email + '</p><p>'+ comment.body + '</p>'
        })))
})

$('#getUser2Posts').click(function(){
    $.get('https://jsonplaceholder.typicode.com/posts?userId=2', input =>
        $('#whereStuffGoes').html(input.map(function(post){
            return '<h3>' + post.title + '<br>by User ' + post.userId + '</h3><p>' + post.body + '</p><br>'
        })))
})

$('#createPost').click(function(){    
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'My New Post',
      body: 'This is my post. There are many like it but this one is mine.',
      userId: '27'
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response => response.json()).then(json => $('#whereStuffGoes').html('<h3>Post ID: '+ json.id +'<br><br>' + json.title + '<br>by User ' + json.userId + '</h3><p>' + json.body + '</p><br>'))
})