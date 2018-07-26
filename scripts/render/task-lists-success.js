const axios = require('axios')
const taskPage = require('./render-tasklist').taskPage

function completeTask(listId, taskId) {
  const body = {
    'completed': true
  }
  return axios.patch(`https://atm-server-g92.herokuapp.com/api/lists/${listId}/tasks/${taskId}`, body, {
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }).then(response => {
    // render the whole task page again.
    taskPage()
  })
}


function deleteTask() {

}

module.exports = {
  completeTask
}