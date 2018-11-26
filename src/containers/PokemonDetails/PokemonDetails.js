import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { BASE_URL } from '../../constants';
import GeneralSpinner from '../../components/shared/GeneralSpinner';

import Paper from '@material-ui/core/Paper';

import { withStyles, Divider, TextField } from '@material-ui/core';
import TableStats from './components/TableStats/TableStats';
import TableGameIndices from './components/TableGameIndices/TableGameIndices';
import ImageSpriteGallery from './components/ImageSpriteGallery/ImageSpriteGallery';

import axios from '../../axios';

class PokemonDetails extends Component {

  state = {
    pokemon: {},
    isLoading: false,
  }

  componentDidMount() {

    this.setState({ isLoading: true });

    this.getFullPokemon()
      .then( pokemon => this.setState({ pokemon: pokemon, isLoading: false }));

  }

  getFullPokemon() {
    const { id } =  this.props.match.params;
    return axios.get(`${BASE_URL}/pokemon/${id}`)
            .then( res => res.data )
            // .then( res =>  res.data )
            .catch( err => console.log("err", err));
  }

  render() {

    const { classes } = this.props;
    let toRender = null;

    const { 
      weight, height, base_experience, species
    } = this.state.pokemon;

    if(this.state.isLoading)
      toRender = <GeneralSpinner/>
    else
      toRender = (
        <Paper className={classes.paper} elevation={2}>
          
          <Typography 
            className={classes.title}
            variant="h4"
            gutterBottom> 
            { this.state.pokemon.name }
          </Typography>
          
          <Divider className={classes.divider}/>
          
          <Typography 
            variant="h6"
            gutterBottom
            className={classes.title}
          > 
            General information
          </Typography>

          <div className={classes.mainContent}>
          
            <TextField
              id="outlined-read-only-weight"
              label="Weight"
              value={ weight ? weight : "Not specified"}
              className={classes.textField}
              margin="normal"
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />

            <TextField
              id="outlined-read-only-height"
              label="Height"
              value={ height ? height : "Not specified"}
              className={classes.textField}
              margin="normal"
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />

            <TextField
              id="outlined-read-only-base-experience"
              label="Base Experience"
              value={ base_experience ? base_experience : "Not specified"}
              className={classes.textField}
              margin="normal"
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />

            <TextField
              id="outlined-read-only-species"
              label="Species"
              value={ species ? species.name : "Not specified"}
              margin="normal"
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />

          </div>

          <Divider className={classes.divider}/>


          <Typography 
            variant="h6"
            gutterBottom
            className={classes.title}
          > 
            Sprite images
          </Typography>
          <ImageSpriteGallery sprites={this.state.pokemon.sprites} />
          
          <Divider className={classes.divider}/>
          
          <Typography 
            variant="h6"
            gutterBottom
            className={classes.title}
          > 
            Detail information
          </Typography>

          <div className={classes.tablesContainer}>
            <TableStats stats={this.state.pokemon.stats} />
            <TableGameIndices indices={this.state.pokemon.game_indices} />
          </div>
          
        </Paper>
      )
    
    return toRender;
  }

}

const styles = theme => ({
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  divider: {
    marginBottom: 25,
    marginTop: 10,
  },
  mainContent: {
    display: 'flex',
    flexFlow: 'wrap',
    justifyContent: 'space-around'
  },
  tablesContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexFlow: 'wrap'
  },
  title: {
    textAlign: 'center',
  }
});

export default withStyles(styles)(PokemonDetails);

