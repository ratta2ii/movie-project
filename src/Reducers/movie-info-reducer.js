/* eslint-disable import/no-anonymous-default-export */
import * as c from '../Actions/ActionTypes';


let initialState = {
    isLoading: false,
    movieInfo: {},
    error: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case c.REQUEST_MOVIE_INFO:
            return Object.assign({}, state, {
                isLoading: true
            });
        case c.GET_MOVIE_INFO_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                movieInfo: action.movieInfo
            });
        case c.GET_MOVIE_INFO_FAILURE:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });    
        default:
            return state;
    }
};