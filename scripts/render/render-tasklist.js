const tasklistTemplate = require('../templates/tasklist')
const taskmenuTemplate = require('../templates/tasklist-menu').tasklistMenu
const request = require('../requests/requests')

const centerColumn = document.getElementById('center-column')
const leftColumn = document.getElementById('left-column')
const rightColumn = document.getElementById('right-column')
const templates = require('../templates/lists')

const newListLink = require('../templates/new-list').newList()
const formNewList = require('../create-list/new-list').formNewList
const newListListener = require('../create-list/new-list').newList

// **** Render the first list ****

function taskNav() {
  // set the navbar
  const navSelect = document.getElementById('navbar-select')
  navSelect.innerHTML = taskmenuTemplate()

  // add click to new list
  newListListener(leftColumn, centerColumn, rightColumn)

  // add click to log out on navbar
  const logoutSelect = document.getElementById('logout-link')
  logoutSelect.addEventListener('click', logOut)
}

function renderTaskList(tasks) {
  taskNav()
  leftColumn.innerHTML = tasklistTemplate.left()
  centerColumn.innerHTML = tasklistTemplate.center()
  rightColumn.innerHTML = tasklistTemplate.right()
  populateTaskList(tasks) // testing
}

function logOut() {
  localStorage.clear()
  const renderHome = require('./render-home').renderHome
  renderHome()
  leftColumn.innerHTML = null
  centerColumn.innerHTML = null
  rightColumn.innerHTML = null
}

// render the list of titles on left column 
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
  //for every a tag, look for the active class, if it has one add the d-none class.
  //  need to find the right way to have it re-render the list after this.

  aTags.forEach((tag) => {
    if (tag.classList.contains('active')) {
      tag.children[0].classList.add('d-none')
    }
  })
  removeButtons.map(el => {
    el.addEventListener('click', (e) => {
      let listId = e.target.dataset.id
      request.destroy(listId)
      // Once the list is destroyed need to figure out how to re-render the list again.
      console.log('destroyed')

    })
  })

}

// ***** Create global variable *****
let taskListId = 1

// populate cards on center and right columns 
function populateTaskList(tasks) {
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
  taskForm.addEventListener('submit', function (event) {
    event.preventDefault()
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


/// function to render task list page 

function taskPage() {
  const request = require('../requests/requests')
  return request.tasksOfList()
    .then(res => {
      const lists = res.data.lists
      taskNav()
      // new user, no list
      if (lists.length === 0) {
        leftColumn.innerHTML = ''
        centerColumn.innerHTML = newListLink
        rightColumn.innerHTML = ''
        formNewList(centerColumn)
      } else {
        const activeList = activeListId ? lists.find(ele => ele.id === activeListId) : lists[0]
        renderTaskList(activeList.tasks)
        renderPopulateLists(lists)
      }
    })
    .catch(console.log)
}


module.exports = {
  renderListsGroupItems,
  renderTasksById,
  renderTaskList,
  taskNav,
  populateTaskList,
  renderPopulateLists,
  movingDoingToDone,
  taskPage
}