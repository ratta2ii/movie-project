import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
        padding: '10% 13%',
    },
    returnHomeBox: {
        marginTop: 60,
        marginBottom: 200,
    },
    returnHomeBtn: {
        color: 'white',
        textDecoration: 'none',
        fontSize: 16,
        background: "#3f51b5",
        padding: '10px 75px 10px 50px',
        position: 'absolute',
        '&:hover': {
            background: 'red',
        }
    },
}));

export default useStyles;