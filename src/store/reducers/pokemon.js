import * as actionTypes from '../actions/actionTypes';

const initialState = {
  pokemons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_POKEMONS:
      return {
        ...state,
        pokemons: state.pokemons.concat(action.pokemons),
      };
        default: return state;
    }
};

export default reducer;