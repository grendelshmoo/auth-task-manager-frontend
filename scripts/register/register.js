const registerErr = require('../templates/login-register').registerIssue
const request = require('../requests/requests')
const registerErrMore = require('../templates/login-register').registerIssueMore
const renderLogin = require('../render/login-register').renderLogin

function register() {
    document.querySelector('#register-form').addEventListener('submit', function (event) {
        event.preventDefault()
        const firstName = event.target.firstName.value
        const lastName = event.target.lastName.value
        const email = event.target.email.value
        const password = event.target.password.value


        const pass = document.querySelector('#register-password')
        const confirmed = document.querySelector('#password-confirm')
        if (pass.value === confirmed.value) {
            request.singup(firstName, lastName, email, password)
                .then(response => {
                    const token = localStorage.setItem('token', response.data.token)
                    renderLogin()
                    console.log('Hey there, look at me')
                    console.log("I am a login page".renderLogin())
                })
                .catch(err => {
                    document.querySelector('#center-column').innerHTML += registerErr()
                })
        } else {
            document.querySelector('#center-column').innerHTML += registerErrMore()
        }
    })
}


module.exports = {
    register
}