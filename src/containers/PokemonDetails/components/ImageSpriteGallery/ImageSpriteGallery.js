import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    width: '80%',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: 'white',
  },
  img: {
    maxHeight: 200,
    maxWidth: 200,
  },
  tile: {
    maxHeight: 300,
    maxWidth: 300,
  }
});

function ImageSpriteGallery({ classes, sprites = {} }) {

  const keys = [];
  const values = [];
  
  for (const key in sprites)
    if (sprites.hasOwnProperty(key) && sprites[key] !== null) {
      keys.push(key);
      values.push(sprites[key]);
    }

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {values.map(( img, i )=> (
          <GridListTile className={classes.tile} key={img}>
            <img className={classes.img} src={img} alt={keys[i]} />
            <GridListTileBar
              title={keys[i]}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

ImageSpriteGallery.propTypes = {
  classes: PropTypes.object.isRequired,
  sprites: PropTypes.object,
};

export default withStyles(styles)(ImageSpriteGallery);