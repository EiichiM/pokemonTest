import { makeStyles } from '@material-ui/styles'

const centredStyleObj = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

export default makeStyles({
    container: {
        height: '100vh',
        flexdirection: 'column',
        ...centredStyleObj
    },
    cardContainer: {
        flexdirection: 'column',
        width: '500px',
        height: '200px',
        padding: '2rem',
        ...centredStyleObj
    }
})