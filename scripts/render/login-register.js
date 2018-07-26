const loginTemplate = require('../templates/login-register').loginTemplate
const registerTemplate = require('../templates/login-register').registerTemplate
const loginErr = require('../templates/login-register').loginIssue
const request = require('../requests/requests')
const register = require('../register/register').register
const taskPage = require('./render-tasklist').taskPage

// login
function login() {
	document.querySelector('#login-form').addEventListener('submit', function (event) {
		event.preventDefault()

		const email = event.target.email.value
		const password = event.target.password.value

		request.loginPost(email, password)
			.then(response => {
				const token = localStorage.setItem('token', response.data.token)
			})
			.then(() => {
				taskPage()
			})
			.catch(error => {
				document.querySelector('#center-column').innerHTML += loginErr()
			})
	})
}

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
		register()
		location.hash = '/register'
	})
}

module.exports = {
	renderLogin,
	renderRegister
}
