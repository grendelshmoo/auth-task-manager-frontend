const axios = require('axios')
const renderTaskList = require('./render-tasklist')
const templates = require('../templates/lists')

function getTasks(token, index = 0) {
  return axios.get('https://atm-server-g92.herokuapp.com/api/lists', {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => {
      const lists = res.data.lists
      renderTaskList.renderTaskList(lists) // no one clicks the page, render the first item
      renderTaskList.renderPopulateLists(lists)
    })
}

// function getTasksAfterCreated () {
//   return axios.get('https://atm-server-g92.herokuapp.com/api/lists', {
//     headers: {
//       authorization: `Bearer ${localStorage.getItem('token')}`
//     }
//   }).then(res => {
//     const lists = res.data.lists
//     // renderTaskList.renderTaskListPage()
//     renderTaskList.renderPopulateLists(lists)
//   })
// }



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
    getTasks() 
  })
}


function deleteTask () {
  
}

module.exports = {
  getTasks,
  completeTask,
 // getTasksAfterCreated
}

