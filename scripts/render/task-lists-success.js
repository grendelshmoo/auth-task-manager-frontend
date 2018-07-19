const axios = require('axios')

function getTasks(token) {
    return axios.get('https://atm-server-g92.herokuapp.com/api/lists', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => {
            console.log(res)
            const lists = res.data.lists
            // render HTML for task list (task form, show HTML for doing, done, ...)
        })
}