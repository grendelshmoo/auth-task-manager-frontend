const taskmenuTemplate = require('../templates/tasklist-menu').tasklistMenu
const newListLink = require('../templates/new-list').newList()
const createNewList = require('../requests/requests').createNewList



function newList(leftColumn, centerColumn, rightColumn) {
    const createList = document.querySelector('#new-list-link')
    console.log("This is newList")
    createList.addEventListener('click', function (event) {
        leftColumn.innerHTML = ''
        centerColumn.innerHTML = newListLink
        rightColumn.innerHTML = ''
        const newTitle = document.querySelector('#new-list').value
        console.log(newTitle)
        createNewList(newTitle).then(response => {
            console.log("Hi there.")
        })
    })
}

module.exports = {
    newList
}

// Add this function where I render the navbar for tasklist