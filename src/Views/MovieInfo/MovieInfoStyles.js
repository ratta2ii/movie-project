import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '79.5vh',
    [theme.breakpoints.down('sm')]: {
      height: '100%',
    }
  },
  paperCon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(27, 38, 43)',
    color: 'white',
    width: 750,
    fontFamily: 'sans-serif',
    [theme.breakpoints.down('sm')]: {
      marginTop: 100,
      marginBottom: 100,
      maxWidth: 600,
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: 0,
      marginBottom: 0,
    },
  },
  posterImgGridItem: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 50,
  },
  posterImgCon: {
    backgroundColor: '#223037',
    width: '60%',
    minHeight: 100,
    maxHeight: 365,
    padding: '15px 15px 10px',
    fontFamily: 'sans-serif',
    [theme.breakpoints.down('sm')]: {
      width: '40%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '70%',
    },
  },
  posterImg: {
    width: '100%',
    maxHeight: 340,
    [theme.breakpoints.down('xs')]: {
      maxHeight: 365, 
    },
  },
  infoBox: {
    padding: '50px 50px 50px 0',
    fontFamily: 'sans-serif',
    [theme.breakpoints.down('sm')]: {
      padding: '50px 75px',
    },
    [theme.breakpoints.down('xs')]: {
      padding: 40,
    },
  },
  movieTitle: {
    fontSize: '1.6rem',
    fontFamily: 'sans-serif',
    marginTop: 20,
    color: '#f5bc16',
    lineHeight: '2.1rem',
  },
  dirNdate: {
    color: '#89b9df',
    fontSize: '.9rem',
    marginTop: 5,
  },
  moviePlot: {
    fontSize: '1rem',
    letterSpacing: '.02rem',
    lineHeight: '1.3',
    marginTop: 25,
  },
  actionAreaGridCon: {
    marginTop: 50,
    borderTop: '1px solid #29383f',
    height: 65,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      paddingBottom: 100,
    },
  },
  backContainer: {
    display: 'flex',
    alignItems: 'center',
    height: 40,
    marginTop: 3,
    marginLeft: 62,
    [theme.breakpoints.down('sm')]: {
      marginTop: -50,
      marginLeft: 70,
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: 40,
    },
  },
  arrowIcon: {
    color: '#637c90',
  },
  backButton: {
    fontSize: '.8rem',
    marginLeft: -8,
    color: '#637c90',
  },
  votesBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 50,
    height: 40,
    color: '#637c90',
    [theme.breakpoints.down('sm')]: {
      margin: 0,
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: 10,
    },
  },
  voteText: {
    fontSize: '.8rem',
    marginBottom: 10,
  },
  downThumbIcon: {
    margin: '0 2px 0 10px',
    fontSize: 'large',
    cursor: 'pointer',
  },
  upThumbIcon: {
    margin: '0 10px 0 2px',
    fontSize: 'large',
    cursor: 'pointer',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 20,
    },
  },
}));

export default useStyles;