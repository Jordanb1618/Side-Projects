//pokemon

async function fetchData(){
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();


        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("could not fetch");
        }

        const data = await response.json();
        const pokemonPic = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite")

        imgElement.src = pokemonPic;
        imgElement.style.display = "block";

    }
    catch(error){
        console.log(error);
    }
}

