import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import useStyles from './NavigationStyles';

const Navigation = (props) => {

  const classes = useStyles();

  return (
    <Box className={classes.root} >
      <Link to='/' >
        <HomeSharpIcon className={classes.homeIcon} />
      </Link>
    </Box>
  )
};

export default Navigation;