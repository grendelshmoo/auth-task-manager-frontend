const newListLink = require('../templates/new-list').newList()
const createdList = require('../templates/new-list').createdList

function newList() {
  const centerColumn = document.getElementById('center-column')
  const leftColumn = document.getElementById('left-column')
  const rightColumn = document.getElementById('right-column')
  const createList = document.querySelector('#new-list-link')
  createList.addEventListener('click', function(event) {
    leftColumn.innerHTML = ''
    centerColumn.innerHTML = ''
    centerColumn.innerHTML = newListLink
    rightColumn.innerHTML = ''
    formNewList(centerColumn)
  })
}


function formNewList(centerColumn) {
  const request = require('../requests/requests')
  const setMinTaskListId = require('../render/render-tasklist.js').setMinTaskListId

  document.querySelector('#create-new-list').addEventListener('submit', function(event) {
    event.preventDefault()
    const newTitle = event.target.newList.value
    request.createNewList(newTitle)
      .then(response => {
        setMinTaskListId([response.data.list])
        centerColumn.innerHTML = ''
        centerColumn.innerHTML = createdList(newTitle)
      })
      .then(() => {
        const renderTaskPage = require('../render/render-tasklist').taskPage
        document.querySelector('#created-list-btn').addEventListener('click', function(event) {
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
