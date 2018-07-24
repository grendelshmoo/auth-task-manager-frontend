const tasklistTemplate = require('../templates/tasklist')
const taskmenuTemplate = require('../templates/tasklist-menu').tasklistMenu

const renderHome = require('./render-home').renderHome
const centerColumn = document.getElementById('center-column')
const leftColumn = document.getElementById('left-column')
const rightColumn = document.getElementById('right-column')
const templates = require('../templates/lists')

const completeTask = require('./task-lists-success').completeTask


function renderTaskList(lists) {
  // set the navbar of task list 
  const navSelect = document.getElementById('navbar-select')
  navSelect.innerHTML = taskmenuTemplate()

  const logoutSelect = document.getElementById('logout-link')
  logoutSelect.addEventListener('click', logOut)

  // const loginLink = document.getElementById('login-link')
  leftColumn.innerHTML = tasklistTemplate.left()
  centerColumn.innerHTML = tasklistTemplate.center()
  rightColumn.innerHTML = tasklistTemplate.right()
  populateDoingDone(lists[0])
  console.log('I am lists[0], yayyy', lists[0])
}

function logOut() {
  localStorage.clear()
  const renderHome = require('./render-home').renderHome
  renderHome()
  leftColumn.innerHTML = null
  centerColumn.innerHTML = null
  rightColumn.innerHTML = null
}

// function renderTaskMenu() {
//   const navSelect = document.getElementById('navbar-select')
//   navSelect.innerHTML = taskmenuTemplate()
// }

function renderListsGroupItems(lists) {
  let listView = lists.map(list => {
    return templates.listTemplate(list)
  }).join('')

  console.log('Hi, there. I am a list view', listView)
  document.getElementById('left-list').innerHTML += listView
}

function renderTasksById(lists) {
  const aTags = Array.from(document.querySelectorAll('a.list-group-item'))
  aTags.map(el => {
    el.addEventListener('click', (event) => {
      centerColumn.innerHTML = ""
      centerColumn.innerHTML = tasklistTemplate.center()

      rightColumn.innerHTML = ""
      rightColumn.innerHTML = tasklistTemplate.right()

      const listItemId = event.target.dataset.id
      lists.map(list => {
        console.log('We are inside renderTaskById')
        if (list.id === parseInt(listItemId)) {
          console.log("The id matches and now populate Doing & Done.")
          populateDoingDone(list)
        }
      })
    })
  })
}

function populateDoingDone(list) {
  const tasks = list.tasks
  tasks.map(task => {
    console.log('Iam a  task, look at me', task)
    if (!task.completed) {
      const singleCard = tasklistTemplate.doingCards(task.id, task.title, task.description, task.list_id, task.id, task.created_at)
      centerColumn.innerHTML += singleCard
    } else {
      const singleCard = tasklistTemplate.completedCards(task.id, task.title, task.description, task.updated_at)
      rightColumn.innerHTML += singleCard
    }
  })
  // moving completed cards from doing to done
  movingDoingToDone()
}

function movingDoingToDone() {
  const completeBtns = Array.from(document.querySelectorAll(".complete"))
  completeBtns.map(btn => {
    btn.addEventListener('click', function (event) {
      const taskId = event.target.dataset.taskid
      const listId = event.target.dataset.listid
      const token = localStorage.getItem('token')
      completeTask(listId, taskId, token)
    })
  })
}


// function completeTask(listId, taskId) {
//   const body = {
//     'completed': true
//   }
//   return axios.patch(`https://atm-server-g92.herokuapp.com/api/lists/${listId}/tasks/${taskId}`, body, {
//     headers: {
//       authorization: `Bearer ${localStorage.getItem('token')}`
//     }
//   }).then(response => {
//     // render the whole task page again. 
//     getTasks()
//   })
// }

function renderPopulateLists(lists) {
  renderListsGroupItems(lists)
  renderTasksById(lists)
}

module.exports = {
  renderListsGroupItems,
  renderTasksById,
  renderTaskList,
  populateDoingDone,
  renderPopulateLists,
  movingDoingToDone,
  completeTask
}