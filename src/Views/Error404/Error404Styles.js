import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 16,
    fontFamily: 'monospace',
    textAlign: 'center',
    color: 'red',
    marginTop: 170,
  },
  errorText: {
    color: 'red',
    fontFamily: 'monospace',
    paddingTop: 100,
  },
  linkText: {
    textDecoration: 'none',
    color: 'dodgerblue',
    margin: '0 5px',
    fontFamily: 'monospace',
  },
}));

export default useStyles;