function loginmenuTemplate() {
  return `
  <li class="nav-item active">
    <a class="nav-link" id='login-link' href="#!/login">Login
      <span class="sr-only">(current)</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id='register-link' href="#!/register">Register</a>
  </li>
  `
}

module.exports = {
  loginmenuTemplate
}
