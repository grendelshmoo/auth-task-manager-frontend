const registerErr = require('../templates/login-register').registerIssue
const request = require('../requests/requests')
const registerErrMore = require('../templates/login-register').registerIssueMore
const renderLogin = require('../render/login-register').renderLogin
const newList = require('../create-list/new-list').newList
const taskNav = require('../render/render-tasklist').taskNav
const newListLink = require('../templates/new-list').newList()
const formNewList = require('../create-list/new-list').formNewList


function register() {
    document.querySelector('#register-form').addEventListener('submit', function (event) {
        event.preventDefault()
        const firstName = event.target.firstName.value
        const lastName = event.target.lastName.value
        const email = event.target.email.value
        const pass = document.querySelector('#register-password')
        const confirmed = document.querySelector('#password-confirm')

        if (pass.value === confirmed.value) {
            console.log("This is register")
            request.signup(firstName, lastName, email, pass.value)
                .then(response => {
                    const token = localStorage.setItem('token', response.data.token)
                    console.log('Hey there, look at me')
                })
                .then(() => {
                    // renderLogin()
                    taskNav()
                    const centerColumn = document.getElementById('center-column')
                    centerColumn.innerHTML = ''
                    centerColumn.innerHTML = newListLink
                    formNewList(centerColumn)
                })
                .then(() => {

                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            document.querySelector('#center-column').innerHTML += registerErrMore()
            console.log('This is the else block for register')
        }
    })
}


module.exports = {
    register
}
