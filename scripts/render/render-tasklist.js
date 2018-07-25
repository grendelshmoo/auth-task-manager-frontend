const tasklistTemplate = require('../templates/tasklist')
const taskmenuTemplate = require('../templates/tasklist-menu').tasklistMenu
const request = require('../requests/requests')

const centerColumn = document.getElementById('center-column')
const leftColumn = document.getElementById('left-column')
const rightColumn = document.getElementById('right-column')
const templates = require('../templates/lists')


// **** Render the first list ****

function renderTaskListPage() {
  // set the navbar
  const navSelect = document.getElementById('navbar-select')
  navSelect.innerHTML = taskmenuTemplate()

  const logoutSelect = document.getElementById('logout-link')
  logoutSelect.addEventListener('click', logOut)

  leftColumn.innerHTML = tasklistTemplate.left()
  centerColumn.innerHTML = tasklistTemplate.center()
  rightColumn.innerHTML = tasklistTemplate.right()
}

function renderTaskList(tasks) {
  renderTaskListPage()
  populateTaskList(tasks)

}

function logOut() {
  localStorage.clear()
  const renderHome = require('./render-home').renderHome
  renderHome()
  leftColumn.innerHTML = null
  centerColumn.innerHTML = null
  rightColumn.innerHTML = null
}

// render the list group on the left
function renderListsGroupItems(lists) {
  let listView = lists.map(list => {
  let isActive = ''
    if (list.id === taskListId) {
      isActive = 'active'
    }

    return templates.listTemplate(list, isActive)
  }).join('')



  document.getElementById('left-list').innerHTML += listView
}

// render center and right column with the coressponding id
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
        if (list.id === parseInt(listItemId)) {
          populateTaskList(list.tasks)
        }
      })
    })
  })
  const removeButtons = Array.from(document.querySelectorAll('#remove-list-button'))
  



}

function addActive() {
  const aTags = Array.from(document.querySelectorAll('a.list-group-item'))
  aTags[0].classList.add('active')
}

// ***** Create global variable *****
let taskListId = 1

function populateTaskList(tasks) {
  // const tasks = list.tasks
  tasks.map(task => {
    // change global variable taskListId here, which is the list id
    taskListId = task.list_id

    if (!task.completed) {
      const singleCard = tasklistTemplate.doingCards(task.id, task.title, task.description, task.list_id, task.id, task.created_at)

      centerColumn.innerHTML += singleCard
    } else {
      const singleCard = tasklistTemplate.completedCards(task.id, task.title, task.description, task.list_id, task.id, task.updated_at)
      rightColumn.innerHTML += singleCard
    }
  })
  // moving completed cards from doing to done
  movingDoingToDone()
}


function createNewTask(lists) {
  const getTasks = require('./task-lists-success').getTasks
  const taskForm = document.querySelector('#task-form')
  taskForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const newTitle = document.getElementById('task-title').value
    const newDesc = document.getElementById('task-description').value
    console.log("I am a taskListId", taskListId)
    request.createTask(newTitle, newDesc, taskListId)
    .then(() => getTasks(taskListId))

  })
}


function movingDoingToDone() {
  const completeTask = require('./task-lists-success').completeTask

  const completeBtns = Array.from(document.querySelectorAll(".complete"))
  completeBtns.map(btn => {
    btn.addEventListener('click', function (event) {
      const taskId = event.target.dataset.taskid
      const listId = parseInt(event.target.dataset.listid)
      completeTask(listId, taskId)
    })
  })
}


function renderPopulateLists(lists) {
  renderListsGroupItems(lists)
  renderTasksById(lists)
  createNewTask(lists)
  // addActive()
}

module.exports = {
  renderListsGroupItems,
  renderTasksById,
  renderTaskList,
  renderTaskListPage,
  populateTaskList,
  renderPopulateLists,
  movingDoingToDone,
}
