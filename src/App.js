import React, { Fragment } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './Views/Home/Home';
import Movies from './Views/Movies/Movies';
import MovieInfo from './Views/MovieInfo/MovieInfo';
import TopRibbon from './Components/TopRibbon/TopRibbon';
import Navigation from './Components/Navigation/Navigation';
import Error404 from './Views/Error404/Error404';

const App = () => {

  return (
    <Fragment>
      <TopRibbon />
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/movies' component={Movies} />
        <Route path='/movie-info' component={MovieInfo} />
        <Route component={Error404} />
      </Switch>
    </Fragment>
  );
}

export default withRouter(App);
