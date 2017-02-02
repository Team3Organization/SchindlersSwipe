"use strict";

var React = require('react');
var UserDetails = require('../common/userDetails');

var FormTemplate = React.createClass({
    PropTypes: {
        name: React.PropTypes.string.isRequired,
        formFields: React.PropTypes.object.isRequired
    },

    createFields: function(field, i) {
        switch (field.type) {
            case "text":
            case "number":
                return (
                <div key={i}>
                    <label>{field.name}: </label>
                    <input type={field.type}/>
                    <br/>
                </div>
                );
            case "radio":
                var radioOptions = field.extraData[0].options.map(function (option) {
                    return { radioGroup: field.name, value: option}
                });
                var radioOptionsComponent = radioOptions.map(function (option, i) {
                    return (
                        <div key={i}>
                            <input type="radio" name={option.radioGroup} value={option.value} /> 
                            <span>{option.value}</span><br/>
                        </div>
                    );
                });
                return (
                    <div>
                        <label>{field.name}: </label>
                        {radioOptionsComponent}
                    </div>
                );
            case "UserDetails":
                return <UserDetails key={i}/>
        }
    },

    render: function () {
        return(
            <form>
                <h2>{this.props.name}</h2>
                <br/>
                {this.props.formFields.map(this.createFields)}
            </form>
        );
    }
});

module.exports = FormTemplate;