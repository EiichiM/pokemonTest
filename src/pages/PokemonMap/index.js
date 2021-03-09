import React, {
  useCallback,
  useState,
  useEffect
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  CircularProgress,
  Container,

  makeStyles
} from '@material-ui/core';
import Page from '../../components/Page';
import useIsMountedRef from '../../hooks/useIsMountedRef';
import Results from './Results';
import { allPokemonResults, pokemonsResults } from '../../redux/selectors'
import { getAllPokemon, getPokemonBaseDetail } from '../../redux/actions/getPokemon';
import { getBasePokemon, getAllBasePokemon } from '../../services'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

function PokemonsView() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const pokemons = useSelector(state => allPokemonResults(state))
  const pokemonsDetail = useSelector(state => pokemonsResults(state))

  const [pokemonData, setPokemonData] = useState([])
  const [allPokemonData, setAllPokemonData] = useState()
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialURL = 'https://pokeapi.co/api/v2/pokemon';

  useEffect(() => {
    let response
    async function fetchData() {
      response = await getAllBasePokemon(initialURL)
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      setAllPokemonData(response.results)
      await loadPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, [])
  // useEffect(() => {
  //   if (allPokemonData) {
  //     dispatch(getAllPokemon(allPokemonData))
  //   }
  // });
  const next = async () => {
    setLoading(true);
    let data = await getAllBasePokemon(nextUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getAllBasePokemon(prevUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getBasePokemon(pokemon)
      return pokemonRecord
    }))
    setPokemonData(_pokemonData);
    dispatch(getPokemonBaseDetail(_pokemonData));
  }

  return (
    <Page
      className={classes.root}
      title="Pokemon List"
    >
      <Container maxWidth="lg">
        {loading && !pokemonsDetail ?
          <Box display='flex' justifyContente='center'>
            <CircularProgress size={100} color="primary" />
          </Box>
          : (
            <React.Fragment>
              <Results pokemons={pokemonsDetail} prev={prev} next={next} />
            </React.Fragment>
          )}
      </Container>
    </Page>
  );
}

export default PokemonsView;
