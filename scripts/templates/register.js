function registerTemplate() {
  return `
  <div class="card border-dark mb-3">
  <div class="card-body text-dark">
    <h2 class="card-title text-center">Register</h2>
    <h6 class="card-subtitle text-muted p-3 m-3">Please enter your information to create a new account.</h6>
  <form>
  <div class='form-row'>
    <div class='form-group col-md-6'>
      <label for="first_name">First Name</label>
      <input type="text" class="form-control" id='first-name' placeholder='First Name*'>
    </div>
    <div class="form-group col-md-6">
      <label for="last_name">Last Name</label>
      <input type="text" class="form-control" id='last-name' placeholder='Last Name*'>
    </div>
  </div>
  <div class='form-group'>
    <label for="email">Email</label>
    <input type='email' class='form-control' id='register-email' placeholder="Email Address*">
  </div>
  <div class='form-row'>
    <div class='form-group col-md-6'>
      <label for='password'>Password</label>
      <input type="password" class='form-control' id="register-password" placeholder="Password*">
    </div>
    <div class='form-group col-md-6'>
      <label for='confirm-password'>Confirm Password</label>
      <input type="password" class='form-control' id="register-password-confirm" placeholder="Retype Password*">
    </div>
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