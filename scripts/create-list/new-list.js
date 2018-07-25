const createList = document.querySelector('#new-list-link')
const taskmenuTemplate = require('../templates/tasklist-menu').tasklistMenu
const newList = require('../templates/new-list').newList()

function newList() {
    createList.addEventListener('click', function (event) {
        document.querySelector('body').innerHTML = ''
        document.querySelector('body').innerHTML += taskmenuTemplate
        document.querySelector('body').innerHTML += newList
        console.log('You are clicking new list')
    })
}

module.exports = {
    newList
}

// Add this function where I render the navbar for tasklist