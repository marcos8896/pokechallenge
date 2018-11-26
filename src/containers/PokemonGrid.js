import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';

import InfiniteScroll from 'react-infinite-scroller';
import PokemonCell from '../components/PokemonCell/PokemonCell';
import GeneralSpinner from '../components/shared/GeneralSpinner';

import { Link } from 'react-router-dom';
import { withStyles, Paper } from '@material-ui/core';

import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/index';

const LIMIT = 20;

class PokemonGrid extends Component {
  
  state = {
    pokemons: [],
    isThereMorePokemons: true,
    currentPage: 0,
  }

  render() {

    const { classes, pokemonReducer } = this.props;

    const items = pokemonReducer.pokemons.map( pokemon => {
      return (
        <div className={classes.cell} key={`${uuidv4()}`}>
          <Link className={classes.link} to={`/show/${pokemon.id}`}>
            <PokemonCell pokemon={pokemon}/>
          </Link>
        </div>
      )
    });

    return (
      <Paper 
        className={classes.root} elevation={2}>
        <InfiniteScroll
          pageStart={-1}
          loadMore={( page ) => this.props.loadPokemons( page, LIMIT )}
          hasMore={true}
          loader={<GeneralSpinner/>}
        >

          <div className={classes.pokemonContainer}>
              {items}
          </div>
        </InfiniteScroll>
      </Paper>
    );
  }
}

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  pokemonContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  cell: {
    margin: 5,
  },
  spinnerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  link: {
    textDecoration: 'none'
  }
});

const mapStateToProps = state => {
  return {
    pokemonReducer: state.pokemons
  }
};

const mapDispatchToProps = dispatch => {
  return {
    loadPokemons: ( page, LIMIT ) => dispatch(actionCreators.storePokemons(page, LIMIT)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PokemonGrid));

