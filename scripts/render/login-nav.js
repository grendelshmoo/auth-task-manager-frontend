const loginNavTemplate = require('../templates/login-nav').loginNavTemplate

function loginNav () {
  const navSelect = document.getElementById('navbar-select')
  navSelect.innerHTML = loginNavTemplate()
}

module.exports = {
  loginNav
}
