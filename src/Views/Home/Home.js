import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { moviesByTitleCall } from './../../Actions/moviesActions';
import { Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FilledInput from '@material-ui/core/FilledInput';
import Footer from './../../Components/Footer/Footer';
import useStyles from './HomeStyles';


const Home = (props) => {

    const { dispatch } = props;
    const classes = useStyles();
    const [movieTitle, setMovieTitle] = useState('');

    const handleFindMovie = () => {
        dispatch(moviesByTitleCall(movieTitle));
        props.history.push('/movies');
    }

    return (
        <Box className={classes.root} >
            <Box>
                <Typography className={classes.title} >
                    SEARCH MOVIES BY TITLE
                </Typography>
                <Box className={classes.formBox} >
                    <FormControl
                        // fullWidth 
                        className={classes.FormControl}
                        variant="filled" >
                        <InputLabel htmlFor="filled-adornment-amount" >
                            Enter Movie Title Here
                        </InputLabel>
                        <FilledInput
                            className={classes.inputField}
                            onChange={(e) => { setMovieTitle(e.target.value) }}
                        />
                    </FormControl>
                    <Button
                        className={classes.findMovieButton}
                        onClick={handleFindMovie}>
                        FIND MOVIE
                    </Button>
                </Box>
                <Box>
                </Box>
            </Box>
            <Footer />
        </Box>
    );
};

const mapStateToProps = state => {
    return {
        movies: state.moviesSlice.movies,
        moviesError: state.moviesSlice.error,
    }
};

export default connect(mapStateToProps)(Home);

