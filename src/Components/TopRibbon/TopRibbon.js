import React from 'react';
import Box from '@material-ui/core/Box';
import useStyles from './TopRibbonStyles';

const TopRibbon = (props) => {

  const classes = useStyles();

  return (
    <Box className={classes.root} ></Box>
  )
};

export default TopRibbon;
