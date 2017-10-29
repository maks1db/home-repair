import React from 'react';
import {Route, Switch, Redirect } from 'react-router';
import Main from 'containers/Main.jsx';

export default () => (

    <Switch>
        <Route exact path="/" component={Main}/>
    </Switch>

);