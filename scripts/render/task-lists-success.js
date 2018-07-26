const axios = require('axios')
const renderTaskList = require('./render-tasklist')
const templates = require('../templates/lists')
const renderNewList = require('../create-list/new-list').newList
const leftColumn = document.getElementById('left-column')
const centerColumn = document.getElementById('center-column')
const rightColumn = document.getElementById('right-column')

function getTasks(activeListId) {
  return axios.get('https://atm-server-g92.herokuapp.com/api/lists', {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => {
      const lists = res.data.lists
      console.log("Muahhhhh", lists)
      if (lists.length === 0) {
        console.log('The list is empty right now.')
        renderTaskList.renderTaskListPage()

        renderNewList(leftColumn, centerColumn, rightColumn)
      } else {
        const activeList = activeListId ? lists.find(ele => ele.id === activeListId) : lists[0]
        console.log(lists, activeListId)
        renderTaskList.renderTaskList(activeList.tasks) // no one clicks the page, render the first item
        renderTaskList.renderPopulateLists(lists)
        console.log(document.querySelector('#new-list-link'))
        renderNewList(leftColumn, centerColumn, rightColumn)

      }
    })
}

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


function deleteTask() {

}

module.exports = {
  getTasks,
  completeTask,
  // getTasksByList
  // getTasksAfterCreated
}