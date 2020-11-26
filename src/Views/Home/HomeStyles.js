import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
    },
    title: {
        color: '#f5bc16',
        fontFamily: `'Acme', fantasy, sans-serif`,
        paddingTop: 150,
        marginBottom: 30,
        fontSize: 70,
        textAlign: 'center',
        wordSpacing: '.6rem',
    },
    formBox: {
        textAlign: 'center',
    },
    FormControl: {
        width: 500,
        backgroundColor: 'white',
    },
    inputField: {
        fontSize: 20,
        paddingLeft: 10,
        backgroundColor: 'white',
        '&hover': {
            backgroundColor: 'white',
        }
    },
    findMovieButton: {
        color: '#ffffff',
        padding: 18.5,
        marginLeft: 5,
        backgroundColor: '#3f51b5',
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        '&:hover': {
            background: "#f00",
        }
    }
}));

export default useStyles;