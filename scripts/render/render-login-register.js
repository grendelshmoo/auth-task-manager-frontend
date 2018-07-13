const loginTemplate = require('../templates/login').loginTemplate
const registerTemplate = require('../templates/register').registerTemplate

function renderLogin() {
    const centerColumn = document.getElementById('center-column')
    const loginLink = document.getElementById('login-link')
    loginLink.addEventListener('click', function (event) {
        return centerColumn.innerHTML = loginTemplate()
    })
}

function renderRegister() {
    const centerColumn = document.getElementById('center-column')
    const registerLink = document.getElementById('register-link')
    registerLink.addEventListener('click', function (event) {
        return centerColumn.innerHTML = registerTemplate()
    })
}

module.exports = {
    renderLogin,
    renderRegister
}