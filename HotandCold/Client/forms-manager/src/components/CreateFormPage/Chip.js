"use strict";

var React = require('react');

var Chip = React.createClass({
    PropTypes: {
        name: React.PropTypes.string.isRequired
    },

    render: function () {
        return (
            <span className="mdl-chip">
                <span className="mdl-chip__text">{this.props.name}</span>
            </span>
        );
    }
});

module.exports = Chip;