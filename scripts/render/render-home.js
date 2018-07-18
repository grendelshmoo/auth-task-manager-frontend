const homeTemplate = require('../templates/homepage').homeTemplate
const renderLogin = require('./render-login-register').renderLogin
const renderRegister = require('./render-login-register').renderRegister
const renderTaskList = require('./render-tasklist').renderTaskList
const renderTaskMenu = require('./render-tasklist').renderTaskMenu
const renderLoginMenu = require('./render-login-menu.js').renderLoginMenu

function renderHome() {
    document.querySelector('body').innerHTML += homeTemplate();
    renderLoginMenu();
    renderLogin();
    renderRegister();
    // renderTaskList()
    // renderTaskMenu()
}


module.exports = {
    renderHome
}
