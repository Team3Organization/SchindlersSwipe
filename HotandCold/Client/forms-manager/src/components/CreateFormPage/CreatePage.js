"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var FormTemplate = require('./FormTemplate');

var CreatePage = React.createClass({
    render: function() {
        return (
            <div className="jumbotron">
                <h1>Create A Form</h1>
                <FormTemplate />
            </div>
        );
    }
});

module.exports = CreatePage;