<% layout('layouts/boilerplate') %>
<link rel="stylesheet" href="/stylesheets/login-signin.css">

      <div class="container">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <h2 class="text-center text-dark mt-5 login-text">Login</h2>
            <div class="card my-5">
    
              <form action="/login" method="POST" class="validated-form card-body cardbody-color p-lg-5" novalidate>
                <div class="mb-3">
                    <label for="username" class="form-label">Username</label>
                    <input type="text" id="username" name="username" class="form-control" required autofocus>
                    <div class="valid-feedback">Looks good!</div>
                    <div class="invalid-feedback">Username cannot be empty</div>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" id="password" name="password" class="form-control" required autofocus>
                    <div class="valid-feedback">Looks good!</div>
                    <div class="invalid-feedback">Password cannot be empty</div>
                </div>
                <button class="btn btn-success login-btn">Login</button>
            </form>
            </div>
    
          </div>
        </div>
      </div>
