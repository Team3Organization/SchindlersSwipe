"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var HomePage = React.createClass({
    render: function() {
        return (
            <div className="jumbotron">
                <h1>Forms Manager</h1>
                
                <Link to="create" className="btn btn-primary btn-lg">Create</Link>
                <Link to="fill" className="btn btn-primary btn-lg">Fill</Link>
                <Link to="sign" className="btn btn-primary btn-lg">Sign</Link>
            </div>
        );
    }
});

module.exports = HomePage;