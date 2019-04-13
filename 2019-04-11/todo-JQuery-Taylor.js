$(document).ready(function(){ //make sure the page loads before you request info
    let list = $('#list');
    $('#1').on('click', function(){
        list.text("")
        $.get('http://jsonplaceholder.typicode.com/posts', function(posts){
            posts.forEach(function(post){
                const li = $('<li>');
                li.text('Post'+post.id+': '+post.body)
                list.append(li);
            });//button1 forEach
        });//get function(posts)
    })//button1 onclick
    $('#2').on('click', function(){
        list.text("")
        $.get('http://jsonplaceholder.typicode.com/posts/10', function(post) {
            const li = $('<li>')
            li.text("Post "+post.id+": "+post.title);
                list.append(li);
        })//get function()
    })//button2 onclick
    $('#3').on('click', function(){
        list.text("")
        $.get('http://jsonplaceholder.typicode.com/posts/12', function(post) {
            const li = $('<li>')
            li.text("Post "+post.id+": "+post.body);
                list.append(li);
        })//get function()
    })//button3 onclick
})//document ready function
Collapse



