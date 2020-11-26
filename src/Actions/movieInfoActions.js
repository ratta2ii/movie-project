import * as c from './ActionTypes';


export const requestMovieInfo = () => ({
    type: c.REQUEST_MOVIE_INFO
});


export const getMovieInfoSuccess = (movieInfo) => ({
    type: c.GET_MOVIE_INFO_SUCCESS,
    movieInfo
});


export const getMovieInfoFailure = (error) => ({
    type: c.GET_MOVIE_INFO_FAILURE,
    error
});


export const movieInfoCall = (imdbID) => {
    return (dispatch, getState) => {
        // returns a single movies details based on a users selection
        fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDBAPI_KEY}&plot=short&i=${imdbID}`)
            .then(res => res.json())
            .then(results => {
                dispatch(getMovieInfoSuccess(results));
            },
            (error) => {
                console.log(error);
                dispatch(getMovieInfoFailure(error));
            });
    }
}