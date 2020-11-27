import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
        padding: '10% 13%',
    },
    returnHomeBox: {
        marginTop: 120,
        textAlign: 'center',
    },
    returnHomeBtn: {
        textDecoration: 'none',
        fontSize: 16,
        color: "white",
        padding: '10px 50px 10px 50px',
        '&:hover': {
            color: 'red',
        }
    },
}));

export default useStyles;