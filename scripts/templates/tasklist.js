function tasklistTemplate() {
  return `
  <h2 class="text-center">Doing</h2>
  <div class="card border-dark mb-3" style="max-width: 18rem;">
    <div class="card-body text-dark">
      <h2 class="card-title text-center">...</h2>
    </div>
  </div>
  `
}

function left() {
  return `
  <h2 class="text-center">All Lists</h2>
  <div class='list-group' id='left-list'>
  </div>
  <hr>
  <div class="card border-dark mb-3">
  <div class="card-body text-dark m-2 p-2">
    <form id='task-form'>
      <h3 class="text-center">Create a New Task</h3>
      <div class='form-group'>
        <label for="title">Title</label>
        <input type="text" class='form-control' id='task-title'>
      </div>
      <label for="description">Description</label>
        <input type="text" class='form-control' id='task-description'>
      <button id="create-task-btn" type='submit' class='btn btn-success m-2 p-2'>Create New Task</button>
    </form>
  </div>
  </div>
  `
}

function center(title, content) {
  return `
  <h2 class="text-center">Doing</h2>
 `
}

function doingCards(taskId, title, content, listId, taskId, createdAt) {
  return `
<div class="card border-dark mb-3" style="max-width: 18rem;" data-taskId="${taskId}">
<div class="card-body text-dark">
  <h2 class="card-title text-center">${title}</h2>
  <p class='card-text'>${content}</p>
  <button type='submit' class='btn btn-success complete' data-listId='${listId}' data-taskId='${taskId}'>Complete</button>
</div>
<div class="card-footer bg-transparent border-success">${createdAt}</div>
</div>
`
}

function completedCards (taskId, title, content, listId, taskId, updatedAt) {
  return `
  <div class="card border-dark mb-3" style="max-width: 18rem;" data-taskId="${taskId}">
  <div class="card-body text-dark">
    <h2 class="card-title text-center">${title}</h2>
    <p class='card-text'>${content}</p>
    <button type='submit' class='btn btn-danger' data-listId='${listId}' data-taskId='${taskId}'>Remove</button>
  </div>
  <div class="card-footer bg-transparent border-success">${updatedAt}</div>
  </div>
  `
}

function right() {
  return `
  <h2 class="text-center">Done</h2>
  `
}



module.exports = {
  tasklistTemplate,
  left,
  center,
  right,
  doingCards,
  completedCards
}
