import React from 'react';
import { Container, CircularProgress, } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux';
import Page from '../../components/Page';
import queryString from 'query-string';
import { pokemonResults } from '../../redux/selectors'
import { searchPokemon } from '../../redux/actions/serachAction';
import PokemonCard from '../../components/PokemonCard';

const Results = ({ location }) => {
    const dispatch = useDispatch();
    const pokemons = useSelector(state => pokemonResults(state))
    const loading = useSelector(state => console.log(state))

    React.useEffect(() => {
        const { pokemonName } = queryString.parse(location.search)
        if (pokemonName && !pokemons) {
            dispatch(searchPokemon({ pokemonName }))
        }
    })
    // console.log(loading)
    const renderPokemon = () => {
        if (pokemons) {
            // return pokemons.map((value, index) => <PokemonCard key={index}{...value} />)
            return <div>GoodJob</div>
        } else {
            return <CircularProgress size={100} color="primary" />
        }
    }
    return (
        <Page title="Results">
            < Container maxWidth="lg" >
                Results
        {renderPokemon()}
            </Container >
        </Page >
    )

}

export default Results