import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { moviesByTitleCall } from './../../Actions/moviesActions';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import { Link } from "react-router-dom";


const Home = (props) => {


    const { dispatch } = props;
    const [ movieTitle, setMovieTitle  ] = useState('');


    const handleFindMovie = () => {
        dispatch(moviesByTitleCall(movieTitle));
        props.history.push('/movies');
    }


    return (
        <Box style={{color: 'white', minHeight: '100vh'}}>
            <label>
                Choose a Movie:
                </label>
            <input onChange={(e) => { setMovieTitle(e.target.value) }} />
            <h1>Hello world</h1>
            <Button onClick={handleFindMovie}>Find Your Movie</Button>
        </Box>
    );
}


const mapStateToProps = state => {
    return {
        movies: state.moviesSlice.movies,
        moviesError: state.moviesSlice.error,
    }
}


export default connect(mapStateToProps)(Home);