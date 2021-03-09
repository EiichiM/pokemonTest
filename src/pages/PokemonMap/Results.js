import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Grid,
  IconButton,
  SvgIcon,
  Typography,
  makeStyles
} from '@material-ui/core';
import {
  ToggleButtonGroup,
  ToggleButton,
  Pagination
} from '@material-ui/lab';
import {
  ArrowLeft as ArrowLeftIcon,
  ArrowRight as ArrowRightIcon,

} from 'react-feather';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import PokemonCard from '../../components/PokemonCard';

const useStyles = makeStyles((theme) => ({
  root: {},
  title: {
    position: 'relative',
    '&:after': {
      position: 'absolute',
      bottom: -8,
      left: 0,
      content: '" "',
      height: 3,
      width: 48,
      backgroundColor: theme.palette.primary.main
    }
  },
  sortButton: {
    textTransform: 'none',
    letterSpacing: 0,
    marginRight: theme.spacing(2)
  }
}));

function Results({ className, pokemons, prev, next, ...rest }) {
  const classes = useStyles();
  const [mode, setMode] = useState('grid');
  const handleModeChange = (event, value) => {
    setMode(value);
  };
  const handleNext = () => {
    next()
  }
  const handlePrev = () => {
    prev()
  }
  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
        mb={2}
      >
        <Typography
          className={classes.title}
          variant="h5"
          color="textPrimary"
        >
          Showing
          {' '}
          {pokemons.length}
          {' '}
          Pokemons
        </Typography>
        <Box
          display="flex"
          alignItems="center"
        >
          <ToggleButtonGroup
            exclusive
            onChange={handleModeChange}
            size="small"
            value={mode}
          >
            <ToggleButton value="grid">
              <ViewModuleIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>
      <Grid
        container
        spacing={3}
      >
        {pokemons.map((pokemon) => (
          <Grid
            item
            key={pokemon.id}
            md={mode === 'grid' ? 4 : 12}
            sm={mode === 'grid' ? 6 : 12}
            xs={12}
          >
            <PokemonCard pokemon={pokemon} />
          </Grid>
        ))}
      </Grid>
      <Box
        mt={6}
        display="flex"
        justifyContent="center"
      >
        <IconButton
          color="inherit"
          onClick={handlePrev}
          color='primary'
        >
          <SvgIcon fontSize="large">
            <ArrowLeftIcon />
          </SvgIcon>
        </IconButton>
        <IconButton
          color="inherit"
          onClick={handleNext}
          color='primary'
        >
          <SvgIcon fontSize="large">
            <ArrowRightIcon />
          </SvgIcon>
        </IconButton>

        {/* <Pagination count={3} /> */}
      </Box>

    </div>
  );
}

Results.propTypes = {
  className: PropTypes.string,
  pokemons: PropTypes.array.isRequired
};

export default Results;
