async function loggedIn(){
    if(!sessionStorage.AUTH_TOKEN)
        return false;
    response = await fetch(backendurl + `/account/current`, {
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

async function allowedToView(page){
    if(!sessionStorage.AUTH_TOKEN)
        return false;
    response = await fetch(backendurl + `/account/haspermission?page=${page}`, {
        method: 'GET',
        headers: {
            'AUTH_TOKEN': sessionStorage.AUTH_TOKEN
        }});
    data = await response.json();
    return data;
}
