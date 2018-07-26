const request = require('../requests/requests')
const registerErrMore = require('../templates/login-register').registerIssueMore
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
            request.signup(firstName, lastName, email, pass.value)
                .then(response => {
                    const token = localStorage.setItem('token', response.data.token)
                })
                .then(() => {
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
        }
    })
}


module.exports = {
    register
}
