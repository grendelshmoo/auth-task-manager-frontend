const axios = require('axios')
const renderHome = require('./render/render-home').renderHome

//DOM Targets
const centerColumn = document.getElementById('center-column')
const leftColumn = document.getElementById('left-column')
const rightColumn = document.getElementById('right-column')
const navSelect = document.getElementById('navbar-select')


// Render homepage view
renderHome()

// check if token => run task-list-success.js
// if not token, run login() from login-register.js 
