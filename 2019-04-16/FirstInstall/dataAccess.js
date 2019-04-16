const rp = require('request-promise');

const dataAccess = {
    getPost: function(id) {
        rp ('http://jsonplaceholder.typicode.com/posts/' + id)
        .then(response => console.log(response))
    }
}

module.exports = dataAccess