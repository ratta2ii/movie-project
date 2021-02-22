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
    fontSize: '4rem',
    textAlign: 'center',
    wordSpacing: '.6rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.5rem',
    }
  },
  formBox: {
    textAlign: 'center',
  },
  FormControl: {
    width: '50%',
    maxWidth: 500,
    backgroundColor: 'white',
  },
  inputLabel: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '.8rem',

    },
  },
  inputField: {
    fontSize: 20,
    paddingLeft: 10,
    backgroundColor: 'white',
    '&hover': {
      backgroundColor: 'white',
    },
    [theme.breakpoints.down('xs')]: {
      height: 52,

    },
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
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '.5rem',

    },
  }
}));

export default useStyles;