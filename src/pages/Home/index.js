import React from 'react';
import { Button, Container, Typography, Card, Grid, TextField } from '@material-ui/core'
import style from './style';
import Page from '../../components/Page';

export default ({ history }) => {
    const classes = style();
    const [sarchText, setText] = React.useState('')

    const handleSearchTextChange = event => {
        setText(event.target.value)
    }

    const handleOnCleanText = event => {
        setText('')
    }

    const handleOnSearchText = event => {
        history.push(`/results?pokemonName=${sarchText}`)
    }
    return (
        <Page title="Enterprices List">
            <Container maxWidth="lg">
                <Card >
                    <Grid container>
                        <Grid> <Typography variant="h1" component="h2">Home</Typography></Grid>
                        <Grid> Label</Grid>
                        <TextField
                            value={sarchText}
                            placeholder="Buscar"
                            onChange={handleSearchTextChange} />
                    </Grid>
                    <Grid container>
                        <Grid>
                            <Button variant="contained" onClick={handleOnCleanText}>
                                Limpiar
                    </Button>
                            <Button variant="contained" color="primary" onClick={handleOnSearchText}>
                                Buscar
                    </Button>
                        </Grid>
                    </Grid>
                </Card>
            </Container>
        </Page>
    )

}