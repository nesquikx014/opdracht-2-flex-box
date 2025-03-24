const pokemonImage = document.getElementById("js--pokemon-image");
let randomNumber = Math.floor(Math.random() * 250 + 1); //1...259


let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
.then(function(response){
    return response.json();
})
.then(function(realData){
    pokemonImage.src = realData.sprites.front_default;
});


const catchButton = document.getElementById("js--catch-button");
const pokemonText = document.getElementById("js--pokemon-text");
let pokemonGamePlayed = false;

catchButton.onclick = function(event){
    if(pokemonGamePlayed === false){
        let catchNumber = Math.floor(Math.random() * 2); // o - 1
        if(catchNumber === 0){
            pokemonText.innerText = "Pokemon Fled!"
        }
        else{
            pokemonText.innerText = "Pokemon Caught!"
    }
    pokemonGamePlayed = true;
    }
}

let inputField = document.getElementById("js--input");

inputField.onkeyup = function(event){
    let name = inputField.value;

    if(event.keyCode === 13){
        console.log(inputField.value);
        let age = fetch("https://api.agify.io?name=")
.then(function(response){
    return response.json();
})
.then(function(echteData){
    console.log(echteData);
});

    }
}

