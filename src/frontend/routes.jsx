import React from 'react';
import {Route, Switch, Redirect } from 'react-router';
import Costs from 'containers/Costs.jsx';
import Layout from 'containers/Layout.jsx';

export default () => (
    <Layout>
        <Switch>
            <Route exact path="/" component={Costs}/>
        </Switch>
    </Layout>
);