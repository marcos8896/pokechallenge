import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width: 125,
    height: 150,
  },
  media: {
    maxHeight: 100,
    minHeight: 100,
  },
  name: {
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'italic',
  }
};

function PokemonCell(props) {
  const { classes, pokemon } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={pokemon.imgUrl}
          title={pokemon.name}
        />
        <CardContent>
          <Typography gutterBottom component="b" className={classes.name}>
            {pokemon.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

PokemonCell.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PokemonCell);