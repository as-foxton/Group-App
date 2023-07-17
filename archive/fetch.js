function saveCV(){
    let newCV = {
        omschrijving: document.getElementById('omschrijving').value,
        werkHistorie: document.getElementById('werkHistorie').value,
        uitstroomRichting: document.getElementById('uitstroomRichting').value,
        specialiteit: document.getElementById('specialiteit').value,
        persoonId: document.getElementById('personId').value
        // person: {
        //     id: document.getElementById('personId').value
        // }
    };

    fetch(`http://localhost:8080/curriculum_vitae/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCV)})
    .then(response => getCVs());
}