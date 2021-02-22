import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  homeIcon: {
    top: 30,
    color: '#111617cc',
    right: 30,
    position: 'absolute',
    fontSize: 50,
    [theme.breakpoints.down('sm')]: {
      fontSize: 40,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 35,
    }
  }
}));

export default useStyles;