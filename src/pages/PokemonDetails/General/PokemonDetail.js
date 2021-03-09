import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
  name: {
    marginTop: theme.spacing(1),
    textTransform: 'uppercase'
  },

  media: {
    width: '100%'
  },
}));

function PokemonDetail({ pokemon, className, ...rest }) {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          textAlign="center"
        >
          
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
            >
              <img src={pokemon.sprites.front_default} alt={`${pokemon.name}`} className={classes.media} />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <img src={pokemon.sprites.back_default} alt={`${pokemon.name}`} className={classes.media} />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <img src={pokemon.sprites.front_default} alt={`${pokemon.name}`} className={classes.media} />
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}

PokemonDetail.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object.isRequired
};

export default PokemonDetail;
