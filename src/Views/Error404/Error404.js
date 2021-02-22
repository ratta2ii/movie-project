import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import useStyles from './Error404Styles';

function Error404(props) {

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant='h4'
        className={classes.errorText}>
        The page {props.location.pathname} does not exist!
            </Typography>
      <Typography variant='h6'>
        Would you like to return
                <Link to="/" className={classes.linkText} >
          HOME
                </Link>
                instead?
      </Typography>
    </Box>
  );
}

Error404.propTypes = {
  location: PropTypes.object,
};

export default Error404;