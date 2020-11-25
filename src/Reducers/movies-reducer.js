import * as c from '../Actions/ActionTypes';


let initialState = {
    isLoading: false,
    movies: [],
    error: null,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case c.REQUEST_MOVIES:
            return Object.assign({}, state, {
                isLoading: true
            });
        case c.GET_MOVIES_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                movies: action.movies
            });
        case c.GET_MOVIES_FAILURE:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });    
        default:
            return state;
    }
};