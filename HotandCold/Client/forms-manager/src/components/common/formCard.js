"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var FormCard = React.createClass({
    PropTypes: {
        title: React.PropTypes.string.isRequired
    },

    render: function () {
        return(
            <div className="card">
                <div className="card-block">
                    <h4 className="card-title">{this.props.title}</h4>
                    <button className="btn btn-primary" onClick={this.props.handleBtnClick}>fill me</button>
                </div>
            </div>
        );
    }
});

module.exports = FormCard;