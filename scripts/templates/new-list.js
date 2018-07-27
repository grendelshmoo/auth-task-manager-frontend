function newList() {
  return `
    <form id='create-new-list'>
        <div class="form-group">
            <label for="new-list">Create a New List</label>
            <input type="text" class='form-control' id='new-list' name='newList'>
        </div>
        <button type="submit" class="btn btn-primary">Create</button>
    </form>
    `
}

function createdList(newTitle) {
  return `
    <div class="card text-center mt-5">
        <div class="card-body">
            <h5 class="card-title">Your list has been created.</h5>
            <p class="card-text">${newTitle}</p>
            <a href="#!/lists" id='created-list-btn' class="btn btn-outline-success btn-sm">Check it out</a>
        </div>
    </div>
    `
}
module.exports = {
  newList,
  createdList
}
