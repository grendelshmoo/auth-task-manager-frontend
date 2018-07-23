const tasklistTemplate = require('../templates/tasklist')
const taskmenuTemplate = require('../templates/tasklist-menu').tasklistMenu

function renderTaskList() {
  console.log('render plz');

  const navSelect = document.getElementById('navbar-select')
  navSelect.innerHTML = taskmenuTemplate()

  const centerColumn = document.getElementById('center-column')
  const leftColumn = document.getElementById('left-column')
  const rightColumn = document.getElementById('right-column')
  const loginLink = document.getElementById('login-link')

  leftColumn.innerHTML = tasklistTemplate.left()
  centerColumn.innerHTML = tasklistTemplate.center()
  rightColumn.innerHTML = tasklistTemplate.tasklistTemplate()

}

// function renderTaskMenu() {
//   const navSelect = document.getElementById('navbar-select')
//   navSelect.innerHTML = taskmenuTemplate()
// }


module.exports = {
  renderTaskList
}
