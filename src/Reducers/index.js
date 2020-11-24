import { combineReducers } from 'redux';
import moviesReducer from './movies-reducer';
import movieInfoReducer from './movie-info-reducer';


const rootReducer = combineReducers({
    moviesSlice: moviesReducer,
    movieInfoSlice: movieInfoReducer,
});


export default rootReducer;