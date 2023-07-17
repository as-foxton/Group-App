
function tekenmenu() {
  document.getElementById("menu").innerHTML = `
  <link rel="stylesheet" type="text/css" href="styles.css">
  <nav class="navbar navbar-dark customnavbar" style="background-color: black !important;">
  <a class="navbar-brand" href="index.html">Home</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>


  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
    <li class="nav-item">
        <a class="nav-link active" href="login.html"> Log in </a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="showvacatures.html"> Vacatures </a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href=""> mijn vaccatures </a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href=""> vaccature detail </a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="showcvs.html"> CVs </a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="createcv.html"> CV Aanmaken </a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href=""> Aangeboden CVs </a>
      </li>
      <li class="nav-item">
       <a class="nav-link active" href=""> cv detail </a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="account.html"> Accounts </a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="feedback.html"> Feedback </a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href=""> Schrijf Feedback </a>
      </li>
      <li class="nav-item">
       <a class="nav-link active" href="l"> Aanbiedingen </a>
      </li>
    </ul>
</div>
      <ul class="navbar-nav ml-auto text-right">
          <li class="nav-item">
              <span class="nav-link disabled" href="#">Ingelogd als: Christel</span>
              <span class="nav-link disabled" href="#">Rol: trainee</span>
          </li>
          <li class="nav-item">
              
          </li>
      </ul>
  </nav>
    `
}