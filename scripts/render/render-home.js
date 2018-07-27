const renderLogin = require('./login-register').renderLogin
const renderRegister = require('./login-register').renderRegister
const loginNav = require('./login-nav.js').loginNav

function renderHome() {
  loginNav();
  renderLogin();
  renderRegister();
}


module.exports = {
  renderHome
}
