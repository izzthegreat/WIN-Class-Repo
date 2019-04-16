let userName = document.querySelector('input#userBox')
let submit = document.querySelector('button[type="submit"]')
function findUser(userName){
    return new Promise(function(resolve,reject){
        $.get('https://jsonplaceholder.typicode.com/users?userName=' + userName,function user(){
            if(user.length){
                resolve (user[0])
            } else {
                reject ('it\'s wrong')
            }
        })
    })
}

function getUserPosts(user){
    return new Promise(function(resolve,reject){
        $.get('https://jsonplaceholder.typicode.com/posts?userID=' + user.id,function (posts){
        resolve (posts)            
        })
    })
}
