
var pages = [
  {name:'Home' , link:'/index.html'},
  {name:'Account' , link:'/account.html'},
  {name:'CVs' , link:'/showcvs.html'},
  {name:'Mijn CV' , link:'/CreateCV.html'},
  {name:'Vacatures' , link:'/showvacatures.html'},
  {name:'Feedback' , link:'/feedback.html'},
  {name:'Mijn vacatures' , link:'/mijnvacatures.html'},
  {name:'Aanbiedingen' , link:'/aanbieding.html'},
  {name:'Mijn aanbiedingen' , link:'/mijnaanbiedingenwerkgever.html'},
  {name:'Data' , link:'/data.html'}
];

async function tekenmenu() {
  
  start = `
  <link rel="stylesheet" type="text/css" href="styles.css">
  <nav class="navbar navbar-dark customnavbar" style="background-color: black !important;">
  `
  
  end = `
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
  middle = await generateMenu();

  document.getElementById("menu").innerHTML = start + middle + end;
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

async function generateMenu(){
  

  response = await fetch(`http://localhost:8080/pages`, {
        method: 'GET',
        headers: {
            'AUTH_TOKEN': sessionStorage.AUTH_TOKEN
        }});
  data = await response.json();
  
  result = '';
    for(page of pages){
      if(data.includes(page.link))
        result += `
          <li class="nav-item">
            <a class="nav-link active" href="${page.link}">${page.name}</a>
          </li>`
    }
    return result;
}