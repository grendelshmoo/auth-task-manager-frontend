const axios = require('axios')
const renderTaskList = require('./render-tasklist')
const templates = require('../templates/lists')

function getTasks(activeListId) {
  return axios.get('https://atm-server-g92.herokuapp.com/api/lists', {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => {
      const lists = res.data.lists
      const activeList = lists.find(ele => ele.id === activeListId)
      console.log(activeList, activeListId)
      renderTaskList.renderTaskList(activeList.tasks) // no one clicks the page, render the first item
      renderTaskList.renderPopulateLists(lists)
    })
}

// function getTasksByList(id) {
//   return axios.get(`https://atm-server-g92.herokuapp.com/api/lists/${id}/tasks`, {
//       headers: {
//         authorization: `Bearer ${localStorage.getItem('token')}`
//       }
//     })
//     .then(res => {
//       const tasks = res.data
//       renderTaskList.renderTaskList(tasks)
//
//     })
// }
//  getTasksByList
//  take specific list ID and gets tasks associated with that.
//




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
    getTasks(listId)
  })
}


function deleteTask () {

}

module.exports = {
  getTasks,
  completeTask,
  // getTasksByList
 // getTasksAfterCreated
}
