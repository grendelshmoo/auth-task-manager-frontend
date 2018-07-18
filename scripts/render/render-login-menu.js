const loginmenuTemplate = require('../templates/login-menu').loginmenuTemplate


function renderLoginMenu () {
  const navSelect = document.getElementById('navbar-select')
  navSelect.innerHTML = loginmenuTemplate()
}

module.exports = {
  renderLoginMenu
}
