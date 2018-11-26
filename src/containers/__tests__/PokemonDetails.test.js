
import 'jest-dom/extend-expect'

import React from 'react';
import { render, waitForElement } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';

import pokemon from './testPokemonData.json';

import mockAxios from 'axios';
import PokemonDetails from '../PokemonDetails/PokemonDetails';

const setup = () => {
  return {
    pokemon
  };
};


it( 'should render the bulbasaur pokemon name on the page', async () => {

  //props.match.params  
  const { pokemon } = setup();
  mockAxios.__mock.instance.get.mockImplementationOnce( () => Promise.resolve({ 
    data: pokemon 
  }));

  const { getByText }
  = render(<MemoryRouter><PokemonDetails match={{ params: { id: 1 }}} /></MemoryRouter>);

  //The pokemon's name has to exit on the document.
  await waitForElement( () => getByText( 'bulbasaur' ) );
  expect( getByText( 'bulbasaur' ) ).toBeInTheDocument();

});



it( 'should render the general information', async () => {
  
  const { getByText } 
  = render(<MemoryRouter><PokemonDetails match={{ params: { id: 1 }}} /></MemoryRouter>);

  await waitForElement( () => getByText( 'bulbasaur' ) );

  expect( getByText( 'Weight' ) ).toBeInTheDocument();
  expect( getByText( 'Height' ) ).toBeInTheDocument();
  expect( getByText( 'Base Experience' ) ).toBeInTheDocument();
  expect( getByText( 'Species' ) ).toBeInTheDocument();

});



it( 'should display the tables from the detail information section', async () => {

  const { pokemon } = setup();
  mockAxios.__mock.instance.get.mockImplementationOnce( () => Promise.resolve({ 
    data: pokemon 
  }));

  const { getByText } 
  = render(<MemoryRouter><PokemonDetails match={{ params: { id: 1 }}} /></MemoryRouter>);

  await waitForElement( () => getByText( 'Stats' ) );

  //The headers from the tables have to exist on the document.
  expect( getByText( 'Stats' ) ).toBeInTheDocument();
  expect( getByText( 'Games' ) ).toBeInTheDocument();

});

