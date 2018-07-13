const loginTemplate = require('../templates/login')

function renderLogin () {
    const centerColumn = document.getElementById('center-column')
    const loginLink = document.getElementById('login-link')
    loginLink.addEventListener('click', function (event) {
        return centerColumn.innerHTML = loginTemplate()
    })
}

module.exports = renderLogin; 
