"use strict";

var React = require('react');

var UserDetails = React.createClass({
    render: function () {
        return(
            <div>
                <label>ID: </label>
                <input type="text" placeholder="12345678"/>
                <label>First Name: </label>
                <input type="text" placeholder="moshe"/>
                <label>Last Name: </label>
                <input type="text" placeholder="katz"/>
                <br/>
            </div>
        );
    }
});

module.exports = UserDetails;