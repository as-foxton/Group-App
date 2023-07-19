
function tekenmenu() {
  document.getElementById("menu").innerHTML = `
  <link rel="stylesheet" type="text/css" href="styles.css">
  <nav class="navbar navbar-dark customnavbar" style="background-color: black !important;">
  <li class="nav-item">
  <a class="nav-link active" href="index.html">Home</a>
  </li>
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
      <a class="dropdown-item" href="mijnvacatures.html">Mijn vacatures</a>
    </div>
  </li>
  <li class="nav-item">
  <a class="nav-link active" href="aanbieding.html">Aanbiedingen</a>
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
  <li class="nav-item">
  <a class="nav-link active" href="data.html">Data</a>
</li>
      <ul class="navbar-nav ml-auto text-right">
          <li class="nav-item">
              <span class="nav-link disabled" href="#">Ingelogd als: ${sessionStorage.userNaam}</span>
              <span class="nav-link disabled" href="#">Rol: ${sessionStorage.userRol}</span>
              <span class="nav-link" onclick="uitloggen()">Uitloggen</span>
          </li>
          <li class="nav-item">
              
          </li>
      </ul>
  </nav>
    `
}

function uitloggen(){
  fetch(`http://localhost:8080/logout`, {
        method: 'GET',
        headers: {
            'AUTH_TOKEN': sessionStorage.AUTH_TOKEN
        }})
        .then(response => {
          sessionStorage.removeItem("AUTH_TOKEN");
          sessionStorage.removeItem("userID");
          sessionStorage.removeItem("userNaam");
          sessionStorage.removeItem("userRol");
          location.href = 'Login.html'
        });
}