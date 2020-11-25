import React from 'react';
import Box from '@material-ui/core/Box';
import useStyles from './NavigationStyles';


const Navigation = () => {

    const classes = useStyles();

    return (
        <Box className={classes.root} ></Box>
    )
};

export default Navigation;