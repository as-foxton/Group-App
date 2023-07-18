
function tekenmenu() {
  document.getElementById("menu").innerHTML = `
  <link rel="stylesheet" type="text/css" href="styles.css">
  <nav class="navbar navbar-dark customnavbar" style="background-color: black !important;">
  <a class="navbar-brand" href="index.html">Home</a>
  <li class="nav-item">
    <a class="nav-link active" href="Login.html">Log in</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle active" href="#" id="navbardrop" data-toggle="dropdown">
      CV
    </a>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="CreateCV.html">CV aanmaken</a>
      <a class="dropdown-item" href="showcvs.html">CVs zien</a>
      <a class="dropdown-item" href="">Detail CV</a>
      <a class="dropdown-item" href="">Aangeboden CVs</a>
    </div>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle active" href="#" id="navbardrop" data-toggle="dropdown">
      Vacature
    </a>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="showvacatures.html">Vacatures zien</a>
      <a class="dropdown-item" href="">Detail vacature</a>
      <a class="dropdown-item" href="">Mijn vacatures</a>
    </div>
  </li>
  <li class="nav-item">
  <a class="nav-link active" href="">Aanbiedingen</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle active" href="#" id="navbardrop" data-toggle="dropdown">
      Feedback
    </a>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="">Feedback schrijven</a>
      <a class="dropdown-item" href="feedback.html">Feedback lezen</a>
    </div>
  </li>
  <li class="nav-item">
    <a class="nav-link active" href="account.html">Accounts</a>
  </li>
      <ul class="navbar-nav ml-auto text-right">
          <li class="nav-item">
              <span class="nav-link disabled" href="#">Ingelogd als: ${sessionStorage.userNaam}</span>
              <span class="nav-link disabled" href="#">Rol: ${sessionStorage.userRol}</span>
          </li>
          <li class="nav-item">
              
          </li>
      </ul>
  </nav>
    `
}