function tasklistMenu() {
  return `
  <ul id="navbar-select" class="navbar-nav mr-auto mx-auto">
    <li class="nav-item active">
      <a class="nav-link" id='all-tasks-link' href="#!/lists">All Tasks
        <span class="sr-only">(current)</span>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id='new-list-link' href="#!/lists">New List</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id='logout-link' href="#!/logout">Log Out</a>
    </li>
  </ul>
  `
}

module.exports = {
  tasklistMenu
}
