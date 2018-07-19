const loginTemplate = require('../templates/login-register').loginTemplate
const registerTemplate = require('../templates/login-register').registerTemplate
const loginErr = require('../templates/login-register').loginIssue
const request = require('../requests/requests')
const axios = require('axios')


// login 
function login() {
	document.querySelector('#login-form').addEventListener('submit', function (event) {
		event.preventDefault()

		const email = event.target.email.value
		const password = event.target.password.value

		request.loginPost(email, password)
			.then(response => {
				console.log(response)
				const token = localStorage.setItem('token', response.data.token)
				return axios.get('https://atm-server-g92.herokuapp.com/api/lists', {
					headers: {
						authorization: `Bearer ${localStorage.getItem('token')}`
					}
				})
			})
			.catch(error => {
				document.querySelector('#center-column').innerHTML += loginErr()
			})
	})
}


// Wes's example in class
/*
axios.post(`${baseURL}/api/users/login`, {
    email: 'student@galvanize.com',
    password: 'password'
}).then(response => {
    const token = localStorage.setItem('token', response.data.token)
    return axios.get('http://localhost:5000/api/lists', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
}).then(console.log)
*/

function renderLogin() {
	const centerColumn = document.getElementById('center-column')
	const loginLink = document.getElementById('login-link')
	loginLink.addEventListener('click', function (event) {
		centerColumn.innerHTML = loginTemplate()
		login()
		location.hash = '/login'
	})
}

function renderRegister() {
	const centerColumn = document.getElementById('center-column')
	const registerLink = document.getElementById('register-link')
	registerLink.addEventListener('click', function (event) {
		centerColumn.innerHTML = registerTemplate()
		location.hash = '/register'
	})
}

module.exports = {
	renderLogin,
	renderRegister
}