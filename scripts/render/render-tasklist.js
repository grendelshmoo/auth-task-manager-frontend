const tasklistTemplate = require('../templates/tasklist').tasklistTemplate
const taskmenuTemplate = require('../templates/tasklist-menu').tasklistMenu


function renderTaskList() {
  const centerColumn = document.getElementById('center-column')
  const leftColumn = document.getElementById('left-column')
  const rightColumn = document.getElementById('right-column')
  const loginLink = document.getElementById('login-link')

  leftColumn.innerHTML = tasklistTemplate()
  centerColumn.innerHTML = tasklistTemplate()
  rightColumn.innerHTML = tasklistTemplate()
}

function renderTaskMenu() {
  const navSelect = document.getElementById('navbar-select')
  navSelect.innerHTML = taskmenuTemplate()
}


module.exports = {
    renderTaskList,
    renderTaskMenu
}
