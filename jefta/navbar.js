function tekenmenu() {
  document.getElementById("menu").innerHTML = `
  <a class="navbar-brand" href="#">
  <img src="logo.png" width="60" height="60" class="d-inline-block align-top" alt="">
  
</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
  <div class="navbar-nav">
    <a class="nav-item nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
    <a class="nav-item nav-link" href="vacature.html">Vacatures</a>
    <a class="nav-item nav-link" href="CurriculumVitae.html">CVs</a>
    <a class="nav-item nav-link" href="account.html">Accounts</a>
    <a class="nav-item nav-link" href="#">Profiel</a>

  </div>
  <div class="navbar-nav ml-auto">
      <div style="position: relative; top: -5px; margin-right: 20px;">
        <span class="navbar-text">
          Ingelogd als <span style="color: #38b1ad;">Jefta Mulder</span> 
        </span>
        <span class="navbar-text" style="display: block; margin-top:-17px; text-align:right; color:#38b1ad; text-decoration: underline; font-size:0.95em;">
          Uitloggen
        </span>
        </div>
  
</div>

  
   `
{/* <div class="navbar-nav ml-auto">
  <span class="navbar-text" style="position: relative; top: -15px; margin-right: 20px;">    Ingelogd als <span style="color: #38b1ad;">Jefta Mulder</span>     </span>
  <span class="navbar-text" style="position: relative; top: 20px; margin-right: 20px;">
        Additional text below
      </span>
      </div> */}

}

{/* <li class="nav-item">
      <a class="nav-link" href="index.html"><img src="logo.svg" alt="logo" class="navbar-logo"></a>
      </li>  */}

      {/* <li class="nav-item">
      <a class="navbar-brand" href="index.html">
      <img style="width: 60px; height: 60px;" src="/assets/theme_logos_yc/standard_logo-488b3be4b4e2e3b5e57091976417ecd1332ca1e4cc1e1a3adbd99783681546f7.png">
      </a>
      </li> */}

      // <!-- Links -->
      // <ul class="navbar-nav">
        
      //   <li class="nav-item">
      //     <a class="nav-link" href="index.html">Home</a>
      //   </li>
      //   <li class="nav-item">
      //     <a class="nav-link" href="vacatures.html">Vacatures</a>
      //   </li>
      //   <li class="nav-item">
      //     <a class="nav-link" href="#">CVs</a>
      //   </li>
      //   <li class="nav-item">
      //     <a class="nav-link" href="#">Accounts</a>
      //   </li>
      //   <li class="nav-item">
      //     <a class="nav-link" href="#">Profiel</a>
      //   </li>
      // </ul>