const axios = require('axios')
const apiUrl = `http://localhost:5000/api/`
const templates = require('./templates/login.js')

//DOM Targets
const centerColumn = document.getElementById('center-column')
const leftColumn = document.getElementById('left-column')
const rightColumn = document.getElementById('right-column')
const navSelect = document.getElementById('navbar-select')


// Navbar

centerColumn.innerHTML = templates.loginTemplate()

// Login

// Register

// All Lists

// Create a new Task

// Doing

// Done
