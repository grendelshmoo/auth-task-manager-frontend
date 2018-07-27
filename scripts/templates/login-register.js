function loginTemplate() {
  return `
    <div class="card border-dark mb-3" style="max-width: 18rem;">
      <div class="card-body text-dark">
        <h2 class="card-title text-center">Login</h2>
        <form id='login-form'>
          <div class="form-group">
            <label>Email address</label>
            <input type="email" class="form-control" name='email' id="login-email" aria-describedby="emailHelp" placeholder="Enter Email*">
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" name='password' id="login-password" placeholder="Password*">
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
    `
}

function registerTemplate() {
  return `
    <div class="card border-dark mb-3">
    <div class="card-body text-dark">
      <h2 class="card-title text-center">Register</h2>
      <h6 class="card-subtitle text-muted p-3 m-3">Please enter your information to create a new account.</h6>
    <form id='register-form'>
    <div class='form-row'>
      <div class='form-group col-md-6'>
        <label for="first_name">First Name</label>
        <input type="text" name='firstName' class="form-control" id='first-name' placeholder='First Name*'>
      </div>
      <div class="form-group col-md-6">
        <label for="last_name">Last Name</label>
        <input type="text" name='lastName' class="form-control" id='last-name' placeholder='Last Name*'>
      </div>
    </div>
    <div class='form-group'>
      <label for="email">Email</label>
      <input type='email' name='email' class='form-control' id='register-email' placeholder="Email Address*">
    </div>
    <div class='form-row'>
      <div class='form-group col-md-6'>
        <label for='password'>Password</label>
        <input type="password" name='password' class='form-control' id="register-password" placeholder="Password*">
      </div>
      <div class='form-group col-md-6'>
        <label for='confirm-password'>Confirm Password</label>
        <input type="password" name='rePassword' class='form-control' id="password-confirm" placeholder="Retype Password*">
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Register</button>
  </form>
  </div>
  </div>
  `
}

function loginIssue() {
  return `
    <div class='p-3 mt-2 bg-warning'>Incorrect username or password.</div>
    `
}

function registerIssue() {
  return `
    <div class='p-3 mt-2 bg-warning'>Passwords do not match.</div>
    `
}

function registerIssueMore() {
  return `
    <div class='p-3 mt-2 bg-warning'>Please check all your input fields.</div>
    `
}

module.exports = {
  registerTemplate,
  loginTemplate,
  loginIssue,
  registerIssue,
  registerIssueMore
}
