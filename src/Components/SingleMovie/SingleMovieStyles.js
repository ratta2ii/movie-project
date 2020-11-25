import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '80vh',
    },
    paper: {
        padding: 20,
        width: 240,
        backgroundColor: '#223037',
        borderTop: '5px solid #2f3940',
        borderRight: '5px solid #2f3940',
        borderBottom: '5px solid #2f3940',
        borderLeft: '5px solid #2f3940',
        height: 360,
        marginBottom: 15,
        cursor: 'pointer',
    },
    moviePosterImg: {
        width: 240,
        height: 360,
    }
}));

export default useStyles;