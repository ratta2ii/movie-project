import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: '10% 13%',
    [theme.breakpoints.down('sm')]: {
      padding: '15% 10% 0',
    }
  },
  returnHomeBox: {
    marginTop: 100,
    paddingBottom: 110,
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      marginTop: 50,
      paddingBottom: 60,
    }
  },
  returnHomeBtn: {
    textDecoration: 'none',
    fontSize: 16,
    padding: '10px 50px 10px 50px',
    [theme.breakpoints.down('xs')]: {
      padding: '5px 25px',
    }
  },
}));

export default useStyles;