const newListLink = require('../templates/new-list').newList()
const createdList = require('../templates/new-list').createdList

function newList() {
    const centerColumn = document.getElementById('center-column')
    const leftColumn = document.getElementById('left-column')
    const rightColumn = document.getElementById('right-column')
    const createList = document.querySelector('#new-list-link')
    console.log("This is newList")
    createList.addEventListener('click', function (event) {
        leftColumn.innerHTML = ''
        centerColumn.innerHTML = ''
        centerColumn.innerHTML = newListLink
        rightColumn.innerHTML = ''
        formNewList(centerColumn)
    })
}


function formNewList(centerColumn) {
    const request = require('../requests/requests')
    document.querySelector('#create-new-list').addEventListener('submit', function (event) {
        event.preventDefault()
        console.log("Inside form new list")
        const newTitle = event.target.newList.value
        request.createNewList(newTitle)
            .then(response => {
                console.log("I am inside form new list again", response)
                centerColumn.innerHTML = ''
                centerColumn.innerHTML = createdList(newTitle)
            })
            .then(() => {
                const renderTaskPage = require('../render/render-tasklist').taskPage
                document.querySelector('#created-list-btn').addEventListener('click', function (event) {
                    console.log("Hey, clicking the button of creating new list")
                    renderTaskPage()
                })
            })
            .catch(console.log)
    })
}

module.exports = {
    newList,
    formNewList
}

// Add this function where I render the navbar for tasklist