const Moment = require('moment');
const time = new Moment();

const timeStamp = {
    getTime: function(){
        console.log(time.format('h:mm:ss a'))
    }
}

module.exports = timeStamp