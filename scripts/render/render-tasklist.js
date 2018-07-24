const tasklistTemplate = require('../templates/tasklist')
const taskmenuTemplate = require('../templates/tasklist-menu').tasklistMenu
const centerColumn = document.getElementById('center-column')
const leftColumn = document.getElementById('left-column')
const rightColumn = document.getElementById('right-column')
const templates = require('../templates/lists')

function renderTaskList(lists) {
  // set the navbar of task list 
  const navSelect = document.getElementById('navbar-select')
  navSelect.innerHTML = taskmenuTemplate()

  // const loginLink = document.getElementById('login-link')
  leftColumn.innerHTML = tasklistTemplate.left()
  centerColumn.innerHTML = tasklistTemplate.center()
  rightColumn.innerHTML = tasklistTemplate.right()
  populateDoingDone(lists[0])
  console.log('I am lists[0], yayyy',lists[0])
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
      const singleCard = tasklistTemplate.doingCards(task.title, task.description, task.created_at)
      centerColumn.innerHTML += singleCard
    } else {
      const singleCard = tasklistTemplate.completedCards(task.title, task.description, task.updated_at)
      rightColumn.innerHTML += singleCard
    }
  })
}

function renderPopulateLists (lists) {
  renderListsGroupItems(lists)
  renderTasksById(lists)
}

module.exports = {
  renderListsGroupItems,
  renderTasksById,
  renderTaskList,
  populateDoingDone,
  renderPopulateLists
}