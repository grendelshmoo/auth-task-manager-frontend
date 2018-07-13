const homeTemplate = require('../templates/homepage').homeTemplate
const renderLogin = require('./render-login-register').renderLogin
const renderRegister = require('./render-login-register').renderRegister

function renderHome() {
    document.querySelector('body').innerHTML += homeTemplate();
    renderLogin();
    renderRegister();
}


module.exports = {
    renderHome
}