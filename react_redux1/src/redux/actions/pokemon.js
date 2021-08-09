const START_GET_POKEMONS = 'START_GET_POKEMONS';
const SUCCES_GET_POKEMONS = 'SUCCES_GET_POKEMONS';


const startGetPokemons = payload => ({
    type: START_GET_POKEMONS,
    ...payload
});
const succesGetPokemons= payload =>({
    type: SUCCES_GET_POKEMONS,
    ...payload
});


//REDUX THUNK
export const fetchPokemon = payload => {
    return dispach =>{
        dispach(startGetPokemons());

        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response => response.json())
        .then(result =>{
            dispach(succesGetPokemons(result));
        });
    };
};
fetchPokemon()
