const tasklistTemplate = require('../templates/tasklist')
const taskmenuTemplate = require('../templates/tasklist-menu').tasklistMenu
const renderHome = require('./render-home').renderHome
const centerColumn = document.getElementById('center-column')
const leftColumn = document.getElementById('left-column')
const rightColumn = document.getElementById('right-column')


function renderTaskList() {
  // set the navbar of task list
  const navSelect = document.getElementById('navbar-select')
  navSelect.innerHTML = taskmenuTemplate()

  const logoutSelect = document.getElementById('logout-link')
  logoutSelect.addEventListener('click', logOut)

  // const loginLink = document.getElementById('login-link')

  leftColumn.innerHTML = tasklistTemplate.left()
  centerColumn.innerHTML = tasklistTemplate.center()
  rightColumn.innerHTML = tasklistTemplate.right()

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


module.exports = {
  renderTaskList
}
