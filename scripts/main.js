const axios = require('axios')
const renderHome = require('./render/render-home').renderHome

//DOM Targets
const centerColumn = document.getElementById('center-column')
const leftColumn = document.getElementById('left-column')
const rightColumn = document.getElementById('right-column')
const navSelect = document.getElementById('navbar-select')
const taskPage = require('./render/render-tasklist').taskPage



const token = localStorage.getItem('token')
if (!token) {
    // Render homepage view only if there is no token.
    renderHome()
} else {
    taskPage()
}

// const token = localStorage.getItem('token')

// Strech goal: onHashChange()
// location.hash
