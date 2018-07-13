function loginTemplate() {
  return `
  <div class="card border-dark mb-3" style="max-width: 18rem;">
    <div class="card-body text-dark">
      <h2 class="card-title text-center">Login</h2>
      <form>
        <div class="form-group">
          <label>Email address</label>
          <input type="email" class="form-control" id="login-email" aria-describedby="emailHelp" placeholder="Enter Email*">
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control" id="login-password" placeholder="Password*">
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
    </div>
  </div>
  `
}

module.exports = {
  loginTemplate
}
