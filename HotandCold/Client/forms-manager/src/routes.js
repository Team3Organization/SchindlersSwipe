"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;

var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute name="home" handler={require('./components/homePage')}/>
        <Route name="create" handler={require('./components/CreateFormPage/CreatePage')}/>
        <Route name="sign" handler={require('./components/SignFormPage/SignPage')}/>
        <Route name="fill" handler={require('./components/FillFormPage/FillPage')}/>
        <NotFoundRoute handler={require('./components/notFoundPage')} />
    </Route>
);

module.exports = routes;