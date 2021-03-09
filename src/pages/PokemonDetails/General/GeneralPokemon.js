import React from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Formik } from 'formik';
// import { useSnackbar } from 'notistack';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormHelperText,
  Grid,
  Switch,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';

const stateOptions = ['Alabama', 'New York', 'San Francisco'];

const useStyles = makeStyles(() => ({
  root: {}
}));

function GeneralPokemon({ pokemon, className, ...rest }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const { enqueueSnackbar } = useSnackbar();

  return (

    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader style={{ textTransform: 'uppercase' }} title={`${pokemon.name}`} />
      <Divider />
      <CardContent>
        <Grid
          container
          spacing={4}
        >
          <Grid
            item
            md={6}
            xs={12}
          >

            <Box
              p={2}
            >
              <Typography
                className={classes.name}
                gutterBottom
                variant="h3"
                color="textPrimary"
              >
                Pokedex Number
            </Typography>
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {pokemon.id}
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >

            <Box
              p={2}
            >
              <Typography
                className={classes.name}
                gutterBottom
                variant="h3"
                color="textPrimary"
              >
                Expirience
            </Typography>
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {pokemon.base_experience}
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <Divider />
            <Box
              p={2}
            >
              <Typography
                className={classes.name}
                gutterBottom
                variant="h3"
                color="textPrimary"
              >
                Weight
            </Typography>
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {pokemon.weight}
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          ><Divider />
            <Box
              p={2}
            >
              <Typography
                className={classes.name}
                gutterBottom
                variant="h3"
                color="textPrimary"
              >
                Height
            </Typography>
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {pokemon.height}
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <Divider />
            <Box
              p={2}
            >
              <Typography
                className={classes.name}
                gutterBottom
                variant="h3"
                color="textPrimary"
              >
                Shiny
            </Typography>
              <img src={pokemon.sprites.back_shiny} alt={`${pokemon.name}`} className={classes.media} />

              <img src={pokemon.sprites.front_shiny} alt={`${pokemon.name}`} className={classes.media} />
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <Divider />
            <Box
              p={2}
            >
              <Typography
                className={classes.name}
                gutterBottom
                variant="h3"
                color="textPrimary"
              >
                Abilities
            </Typography>
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {pokemon.abilities[0].ability.name}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

GeneralPokemon.propTypes = {
  className: PropTypes.string,
  pokemon: PropTypes.object.isRequired
};

export default GeneralPokemon;
