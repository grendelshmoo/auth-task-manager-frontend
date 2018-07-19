// const homeTemplate = require('../templates/homepage').homeTemplate
const renderLogin = require('./login-register').renderLogin
const renderRegister = require('./login-register').renderRegister
const renderTaskList = require('./render-tasklist').renderTaskList
const renderTaskMenu = require('./render-tasklist').renderTaskMenu
const loginNav = require('./login-nav.js').loginNav

function renderHome() {
    // document.querySelector('body').innerHTML += homeTemplate();
    loginNav();
    renderLogin();
    renderRegister();
    // renderTaskList()
    // renderTaskMenu()
}


module.exports = {
    renderHome
}
