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
const nameText = document.getElementById("js--name");
let inputField = document.getElementById("js--input");

inputField.onkeyup = function(event){
    if(event.keyCode === 13){
        let name = inputField.value;
        console.log(inputField.value);
        let age = fetch("https://api.agify.io?name=" + name)
.then(function(response){
    return response.json();
})
.then(function(echteData){
    inputField.style.display = "none";
    nameText.innerText = echteData.age;
});

    }
}

