import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Card,
  CardMedia,
  Grid,
  Link,
  Typography,
  colors,
  makeStyles
} from '@material-ui/core';

const typeColors = {
  bug: '#729f3f',
  dragon: '#53a4cf',
  fairy: '#fdb9e9',
  fire: '#fd7d24',
  ghost: '#7b62a3',
  ground: '#f7de3f',
  normal: '#a4acaf',
  pyschic: '#f366b9',
  steel: '#9eb7b',
  dark: '#707070',
  electric: '#eed535',
  fighting: '#d56723',
  flying: '#3dc7ef',
  grass: '#9bcc50',
  ice: '#51c4e7',
  poison: '#b97fc9',
  rock: '#a38c21',
  water: '#4592c4'
}

const useStyles = makeStyles((theme) => ({
  root: {},
  media: {
    height: 250,
    backgroundColor: theme.palette.background.dark
  },
  likedButton: {
    color: colors.red[600]
  },
  subscribersIcon: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1)
  },
  cardType: {
    padding: '5px 10px',
    margin: '10px 10px 10px 0',
    borderRadius: ' 50px',
  }
}));

function PokemonCard({ pokemon, className, ...rest }) {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box p={3}>
        <Box
          display="flex"
          alignItems="center"
          mt={2}
        >
          <Box mb={2} style={{ textAlign: "center", width: "100%" }}>
            <Link
              color="textPrimary"
              component={RouterLink}
              to={`/results?pokemonName=${pokemon.id}`}
              variant="h5"
              style={{textTransform: 'uppercase'}}
            >
              {pokemon.name}
            </Link>
            <Typography
              variant="body2"
              color="textSecondary"
            >
              {pokemon.id}
            </Typography>
          </Box>
        </Box>
        <CardMedia
          className={classes.media}
          image={pokemon.sprites.front_default}
          alt={`${pokemon.name}`}
        />
      </Box>
      <Box
        px={3}
      >
        <Box
          display="flex"
          justifyContent="space-around"
        >
          {
            pokemon.types.map(type => {
              return (
                <div className={classes.cardType} style={{ backgroundColor: typeColors[type.type.name] }}>
                  <Typography
                    variant="body2"
                    color="white"
                  >
                    {type.type.name}
                  </Typography>
                </div>
              )
            })
          }
        </Box>
      </Box>
      <Box
        py={2}
        px={3}
      >
        <Grid
          alignItems="center"
          container
          justify="space-between"
          spacing={3}
        >
          <Grid item>
            <Typography
              variant="h5"
              color="textPrimary"
            >
              Weight
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
            >
              {pokemon.weight}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h5"
              color="textPrimary"
            >
              Height
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
            >
              {pokemon.height}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}

PokemonCard.propTypes = {
  className: PropTypes.string,
  pokemon: PropTypes.object.isRequired
};

export default PokemonCard;
