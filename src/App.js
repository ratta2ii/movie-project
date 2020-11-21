import React, { Fragment } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './Views/Home/Home';



function App(props) {

    return (
        <Fragment>
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </Fragment>
    );
}

export default withRouter(App);
