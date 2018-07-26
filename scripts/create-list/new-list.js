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
        formNewList(centerColumn)
    })
}

function formNewList(centerColumn) {
    document.querySelector('#create-new-list').addEventListener('submit', function (event) {
        const newTitle = event.target.newList.value
        createNewList(newTitle)
            .then(response => {
                const getTasks = require('../render/task-lists-success').getTasks
                console.log("My name is getTasks", getTasks)
                console.log(response)
                centerColumn.innerHTML = ''

                // re-render the page 
                getTasks()
            })
            .catch(console.log)
    })
}

module.exports = {
    newList
}

// Add this function where I render the navbar for tasklist