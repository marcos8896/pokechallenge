import * as actionTypes from "./actionTypes";

import { BASE_URL } from "../../constants";
import axios from "../../axios";

export const savePokemons = pokemons => {
  return {
    type: actionTypes.GET_POKEMONS,
    pokemons: pokemons
  };
};

export const storePokemons = ( page, LIMIT ) => {
  return async (dispatch, getState) => {
    try {
      const results = await axios.get(`${BASE_URL}/pokemon/`, {
        params: {
          limit: LIMIT,
          offset: LIMIT * page
        }
      });

      const pokemons = results.data.results.map(getImageUrlForPokemon);
      dispatch(savePokemons(pokemons));
    } catch (err) {
      console.log("err: ", err);
    }
  };
};

const getImageUrlForPokemon = ( pokemon ) => {
    
  const baseArray = pokemon.url.split('');
  baseArray.pop();

  const urlArray = baseArray.reverse();
  let id = "", x;
  
  const limit = urlArray.length;
  x = 0;
  
  while(x < limit) {
    if(urlArray[x] !== '/') {
      id = id + urlArray[x];
      x++;
    } else {  x = limit }
  }

  id = id.split('').reverse().join('');
  pokemon.id = id;
  pokemon.imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  
  return pokemon;

}
