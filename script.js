const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a5b4a2f967msh0330085b391ffcbp1e51d9jsn1a81f26f25b8',
		'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
	}
};

fetch('https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/', options)
	.then(response => response.json())
	.then(response => displayPlanet(response))
	.catch(err => console.error(err));

function displayPlanet(planets){
    let image=document.querySelector("img")
    image.src=planets[2].imgSrc.img;
    image.alt=planets[2].imgSrc.imgDescription;
    let planetDescription=document.getElementById("description");
    planetDescription.textContent=planets[2].description


    let findButton=document.querySelector("button");
    findButton.addEventListener("click", event => {
        event.preventDefault()
        const planetInput = document.getElementById("planetInput");
        let find=planetInput.value;
        planetInput.value=""
        for (const planet of planets) {
            if (planet.name.toUpperCase()===find.toUpperCase()){
                image.src=planet.imgSrc.img
                image.alt=planet.imgSrc.imgDescription;
                planetDescription.textContent=planet.description;

            }
        }

    })

}