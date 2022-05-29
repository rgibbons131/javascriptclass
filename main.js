const pokemon = document.getElementById("pokemonEntry");
var pokemonString = pokemon.innerHTML;
async function getPokemon(url){
    const results = await fetch(url);
    if (results.ok) {
        const data = await results.json();
        return data;
    }
}
async function printResults(){
    reset();
    const pokemon = document.getElementById("pokemonEntry");
    var url = "https://pokeapi.co/api/v2/pokemon/";
    url += pokemon.value;
    const data = await getPokemon(url);
    const pokemonName = document.getElementById("pokemonName");
    const pokemonInfo = document.getElementById("pokemonInfo");
    const pokePic = document.getElementById("Pokemon Picture");
    pokePic.setAttribute("src", data.sprites.front_default);
    pokemonName.innerHTML = pokemon.value;
    const pokeId = document.createElement("p");
    pokeId.innerHTML = data.id;
    pokemonInfo.append(pokeId)
    data.types.forEach(type => 
        {const types = document.createElement("p");
        types.innerHTML = type.type.name;
        pokemonInfo.append(types);}

        
        )


}
function reset(){
    var e = document.getElementById("pokemonInfo");
    var child = e.lastElementChild; 
    while (child){
        e.removeChild(child);
        child = e.lastElementChild;
    };
};