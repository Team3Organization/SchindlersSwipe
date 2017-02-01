"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
    render: function () {
        return(
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li><Link to="create">Create</Link></li>
                        <li><Link to="sign">Sign</Link></li>
                        <li><Link to="fill">Fill</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;