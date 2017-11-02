import React from 'react';
import {Route, Switch, Redirect } from 'react-router';
import Costs from 'containers/Costs.jsx';
import Repair from 'containers/Repair.jsx';
import Plan from 'containers/Plan.jsx';
import Idea from 'containers/Idea.jsx';
import Layout from 'containers/Layout.jsx';

export default () => (
    <Layout>
        <Switch>
            <Route exact path="/" component={Costs}/>
            <Route path="/repair" component={Repair}/>
            <Route path="/plan" component={Plan}/>
            <Route path="/idea" component={Idea}/>
        </Switch>
    </Layout>
);