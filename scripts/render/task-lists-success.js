const axios = require('axios')
const renderTaskList = require('./render-tasklist').renderTaskList

function getTasks(token) {
    renderTaskList()
    return axios.get('https://atm-server-g92.herokuapp.com/api/lists', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => {
            console.log(res)
            const lists = res.data.lists
            console.log(lists)
            // render HTML for task list page with data from response 

            // logout function: clear out token from local storage 
            // (click logout, wipe local storage, bring back homeview with login, register)
        })
}

module.exports = {
    getTasks
}