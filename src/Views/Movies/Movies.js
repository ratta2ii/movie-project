import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import { movieInfoCall } from './../../Actions/movieInfoActions';
import SingleMovie from './../../Components/SingleMovie/SingleMovie';
// import { Link } from "react-router-dom";
// import Button from '@material-ui/core/Button';
// import Grid from '@material-ui/core/Grid';
//import Typography from '@material-ui/core/Typography';


const Movies = (props) => {


    const { dispatch, movies, moviesError, isLoading } = props;


    const handleMovieInfo = (imdbID) => {
        dispatch(movieInfoCall(imdbID));
        setTimeout(() => {
            props.history.push('/movie-info');
        }, 200)
    }


    if (movies) {
        if (movies.length > 0) {
            return (
                <Box>
                    {movies.map((ele, index) =>
                        <SingleMovie
                            handleMovieInfo={handleMovieInfo}
                            key={index}
                            poster={ele.Poster}
                            imdbID={ele.imdbID}
                        />
                    )}
                </Box>
            );
        }
    }
    if (moviesError) {
        return <React.Fragment>Error: {moviesError.message}</React.Fragment>;
    }
    else if (isLoading) {
        return <Box>...still loading</Box>
    }
    else {
        return <Box>Sorry, we cannot find any movies with that name.</Box>
    }
}


const mapStateToProps = state => {
    return {
        movies: state.moviesSlice.movies,
        moviesError: state.moviesSlice.error,
        isLoading: state.moviesSlice.isLoading,
    }
}


export default connect(mapStateToProps)(Movies);


