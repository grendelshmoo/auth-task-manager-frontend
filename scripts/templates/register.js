function registerTemplate() {
  return `
  <div class="card border-dark mb-3">
    <div class="card-body text-dark">
      <h2 class="card-title text-center">Register</h2>
      <h6 class="card-subtitle text-muted p-3 m-3">Please enter your information to create a new account.</h6>
      <form>
        <div class="form-group p-2 m-2">
          <label>First Name</label>
          <input type="text" class="form-control p-2 m-2" id="first_name" placeholder="Jane">
          <label>Last Name</label>
          <input type="text" class="form-control p-2 m-2" id="last_name" placeholder="Smith"
          <label>Email address</label>
          <input type="email" class="form-control p-2 m-2" id="register-email" placeholder="jane@smith.org">
        </div>
        <div class="form-group p-2 m-2">
          <label>Password</label>
          <input type="password" class="form-control p-2 m-2" id="register-password" placeholder="New Password">
          <input type="password" class="form-control p-2 m-2" id="register-password-confirm" placeholder="Confirm">
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
      </form>
    </div>
  </div>
  `
}

module.exports = {
  registerTemplate
}
