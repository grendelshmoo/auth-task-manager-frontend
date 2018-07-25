const axios = require('axios')
const renderHome = require('./render/render-home').renderHome

//DOM Targets
const centerColumn = document.getElementById('center-column')
const leftColumn = document.getElementById('left-column')
const rightColumn = document.getElementById('right-column')
const navSelect = document.getElementById('navbar-select')
const getTasks = require('./render/task-lists-success').getTasks



const token = localStorage.getItem('token')
if (!token) {
    // Render homepage view only if there is no token.
    renderHome()
} else {
    // check if token exists => render all the tasks for that token
    // run getTasks()
    // logout function: clear out token from local storage
    getTasks(1)
}

// const token = localStorage.getItem('token')

// Strech goal: onHashChange()
// location.hash
