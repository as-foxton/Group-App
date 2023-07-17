
function tekenmenu() {
  document.getElementById("menu").innerHTML = `
  <link rel="stylesheet" type="text/css" href="styles.css">
  <nav class="navbar navbar-expand-sm navbar-dark justify-content-center customnavbar" style="background-color: black !important;">

  
  <div class="order-1 order-md-0">
      <ul class="navbar-nav mr-auto">
      </ul>
  </div>
  <div class="mx-auto order-0">
    <ul class="navbar-nav mx-auto">
      <li class="nav-item">
        <a class="nav-link active" href="index.html"> Home </a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="vacatures.html"> Vacatures </a>
      </li>
      <li class="nav-item">
      <a class="nav-link active" href="showcvs.html"> CVs </a>
      </li>
      <li class="nav-item">
      <a class="nav-link active" href="account.html"> Accounts </a>
      </li>
      <li class="nav-item">
      <a class="nav-link active" href="feedback.html"> Feedback </a>
      </li>
     
  </div>
  <div class="order-3">
      <ul class="navbar-nav ml-auto text-right">
          <li class="nav-item">
              <span class="nav-link disabled" href="#">Ingelogd als: ${sessionStorage.userNaam}</span>
              <span class="nav-link disabled" href="#">Rol: ${sessionStorage.userRol}</span>
          </li>
          <li class="nav-item">
              
          </li>
      </ul>
  </div>
  </nav>
    `
}