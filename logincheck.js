async function loggedIn(){
    if(!sessionStorage.AUTH_TOKEN)
        return false;
    response = await fetch(`http://localhost:8080/account/current`, {
        method: 'GET',
        headers: {
            'AUTH_TOKEN': sessionStorage.AUTH_TOKEN
        }});
    data = await response.json();
    if(data.id == -1){
        return false
    }
    else{
        return true
    }
}
