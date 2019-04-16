const accessData = require('./dataAccess');
const printTime = require('./timeStamp')
let i = 0
let timer = setInterval(function(){
    accessData.getPost(1)
    printTime.getTime()
    i++
    if (i==5) {clearInterval(timer)}
},3000)

