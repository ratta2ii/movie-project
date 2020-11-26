import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import SingleMovie from './../../Components/SingleMovie/SingleMovie';
import useStyles from './MoviesStyles';
import { movieInfoCall } from './../../Actions/movieInfoActions';


const Movies = (props) => {

    const { dispatch, movies, moviesError, isLoading } = props;
    const classes = useStyles();

    const handleMovieInfo = (imdbID) => {
        dispatch(movieInfoCall(imdbID));
        setTimeout(() => {
            props.history.push('/movie-info');
        }, 200)
    }

    if (movies) {
        if (movies.length > 0) {
            return (
                <Box className={classes.root} >
                    <Grid container spacing={8} >
                        {movies.map((ele, index) => {
                                let poster = ele.Poster;
                                if ((!poster) || poster === "N/A") {
                                    poster = `https://via.placeholder.com/200x300.png/000000/FFFFFF?text=NO POSTER`
                                }
                                return (           
                                    <SingleMovie
                                        handleMovieInfo={handleMovieInfo}
                                        key={index}
                                        poster={poster}
                                        imdbID={ele.imdbID}
                                    />
                                ); 
                        }
                        )}
                    </Grid>
                    <Box className={classes.returnHomeBox} >
                        <Button
                            className={classes.returnHomeBtn}
                            component={Link}
                            to='/'
                        >
                            RETURN HOME
                        </Button>
                    </Box>
                </Box >
            );
        }
    }
    //! Here down still needs styling (reusable error component coming soon).
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
};

export default connect(mapStateToProps)(Movies);


