import React, { Fragment } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './Views/Home/Home';
import Movies from './Views/Movies/Movies';
import MovieInfo from './Views/MovieInfo/MovieInfo';


function App(props) {
    return (
        <Fragment>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/movies' component={Movies} />
                <Route path='/movie-info' component={MovieInfo} />
            </Switch>
        </Fragment>
    );
}


export default withRouter(App);
