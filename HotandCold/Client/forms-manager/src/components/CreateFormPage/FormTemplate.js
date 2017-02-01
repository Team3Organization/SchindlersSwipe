"use strict";

var React = require('react');
var TextInput = require('../common/textInput');

var FormTemplate = React.createClass({
    PropTypes: {
        name: React.PropTypes.string.isRequired,
        formFields: React.PropTypes.object.isRequired
    },

    createFields: function(field, i) {
        return (
            <div key={i}>
                <label>{field.name}: </label>
                <input type={field.type}/>
                <br/>
            </div>
        );
    },

    render: function () {
        return(
            <form>
                <h2>Tofes Neshek</h2>
                <br/>
                {this.props.formFields.map(this.createFields)}
            </form>
        );
    }
});

module.exports = FormTemplate;