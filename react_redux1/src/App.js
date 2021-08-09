import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'; //ESTO ME PERMITE QUE LOS COMPONENTES QUE SON COMPONENTES FUNCIONES INCLUSO HOOKS TOMEN UN CLASSCOMPONENT
import { fetchPokemon } from './redux/actions/pokemon';
import './App.css';

function App(props){
  const dispatch = useDispatch();
  const [pokemons, setPokemons] = useState([]);
  useEffect(() =>{
if(pokemons.length === 0){ 
   dispatch(fetchPokemon())
   setPokemons([{}, {}])
    };
  })

  return (
    <div className="App">
      APRENDIENDO REDUX
    </div>
  );
}

export default App;
