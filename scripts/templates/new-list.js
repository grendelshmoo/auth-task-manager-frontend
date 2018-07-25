function newList () {
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


module.exports = {
    newList
}