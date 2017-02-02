"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var HomePage = React.createClass({
    render: function() {
        return (
            <div className="jumbotron">
                <h1>Welcome to Forms Manager</h1>
                <h2>What would you like to do?</h2>
                <Link to="create" className="btn btn-primary btn-lg container-fluid">Create</Link>
                <Link to="fill" className="btn btn-primary btn-lg container-fluid">Fill</Link>
                <Link to="sign" className="btn btn-primary btn-lg container-fluid">Sign</Link>
            </div>
        );
    }
});

module.exports = HomePage;