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
  <form id='task-form'>
    <h3>Create a New Task</h3>
    <div class='form-group'>
      <label for="title">Title</label>
      <input type="text" class='form-control' id='task-title'>
    </div>
    <div class='form-control'>
      <label for="description">Description</label>
      <input type="text" class='form-control' id='task-description'>
    </div>
    <button type='submit' class='btn btn-success'>Create New Task</button>
  </form>
  `
}

function center(title, content) {
  return `
  <h2>Doing</h2>
 `
}

function doingCards(title, content, createdAt) {
  return `
<div class="card border-dark mb-3" style="max-width: 18rem;">
<div class="card-body text-dark">
  <h2 class="card-title text-center">${title}</h2>
  <p class='card-text'>${content}</p>
  <button type='submit' class='btn btn-success'>Complete</button>
</div>
<div class="card-footer bg-transparent border-success">${createdAt}</div>
</div>
`
}

function completedCards (title, content, updatedAt) {
  return `
  <div class="card border-dark mb-3" style="max-width: 18rem;">
  <div class="card-body text-dark">
    <h2 class="card-title text-center">${title}</h2>
    <p class='card-text'>${content}</p>
    <button type='submit' class='btn btn-danger'>Complete</button>
  </div>
  <div class="card-footer bg-transparent border-success">${updatedAt}</div>
  </div>
  `
}

function right() {
  return `
  <h2>Done</h2>
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