import React, { Component } from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './material-theme';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import PokemonGrid from './containers/PokemonGrid';
import PokemonDetails from './containers/PokemonDetails/PokemonDetails';
import MainLayout from './layouts/MainLayout/MainLayout';

import 'react-table/react-table.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <MainLayout>
            <Route exact path={"/"} component={PokemonGrid}/>
            <Route exact path={"/show/:id"} component={PokemonDetails}/>
          </MainLayout>
        </Switch>
      </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
