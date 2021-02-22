import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  rootGridItem: {
    display: 'flex',
    justifyContent: 'center',
  },
  paper: {
    padding: 20,
    width: 230,
    backgroundColor: '#223037',
    height: 350,
    marginBottom: 15,
  },
  moviePosterImg: {
    width: 230,
    height: 335,
  },
  detailsLink: {
    fontSize: 14,
    color: "#89b9df",
    float: "right",
    margin: 5,
    cursor: 'pointer',
  }
}));

export default useStyles;