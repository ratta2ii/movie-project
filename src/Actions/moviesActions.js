import * as c from './ActionTypes';


export const requestMovies = () => ({
    type: c.REQUEST_MOVIES
});


export const getMoviesSuccess = (movies) => ({
    type: c.GET_MOVIES_SUCCESS,
    movies
});


export const getMoviesFailure = (error) => ({
    type: c.GET_MOVIES_FAILURE,
    error
});


export const moviesByTitleCall = (movieTitle) => {
    return (dispatch, getState) => {
        // returns a list of movies based on the title a user inputed
        fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDBAPI_KEY}&plot=short&s=${movieTitle}`)
            .then(res => res.json())
            .then(results => {
                console.log(results.Search);
                dispatch(getMoviesSuccess(results.Search));
            },
            (error) => {
                console.log(error);
                dispatch(getMoviesFailure(error));
            });
    }
}



// Alternative API
// https://api.themoviedb.org/3/movie/550?api_key=