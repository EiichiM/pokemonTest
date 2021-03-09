import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  CircularProgress,
  Container,
  makeStyles
} from '@material-ui/core';
import queryString from 'query-string';
import { pokemonResults } from '../../redux/selectors'
import { searchPokemon } from '../../redux/actions/serachAction';
import Page from '../../components/Page';
import General from './General';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

const PokemonDatail = ({ location }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const pokemons = useSelector(state => pokemonResults(state))
  const loading = useSelector(state => console.log(state))

  console.log(pokemons)
  React.useEffect(() => {
    const { pokemonName } = queryString.parse(location.search)

    dispatch(searchPokemon({ pokemonName }))

  })

  return (
    <Page
      className={classes.root}
      title="Pokemon Details"
    >
      <Container maxWidth="lg">
        <Box mt={3}>
          {!pokemons ?
            <Box display='flex' justifyContente='center'>
              <CircularProgress size={100} color="primary" />
            </Box>
            : (
              <React.Fragment>
                <General pokemon={pokemons} />
              </React.Fragment>
            )}
        </Box>
      </Container>
    </Page>
  );
}

export default PokemonDatail;
