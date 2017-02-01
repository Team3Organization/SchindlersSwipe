"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var FormTemplate = require('./FormTemplate');
var toastr = require('toastr');

var CreatePage = React.createClass({
    getInitialState: function () {
        return {
            formFields: [
                { name: "Moshe", type: "text"}
            ]
        };
    },

    addTextBox: function() {
        var fieldName = prompt("please enter your field's name:");
        this.state.formFields.push({ name: fieldName, type: 'text' });
        this.setState({formFields: this.state.formFields});
        toastr.success('Textbox added succesfully!');
    },

    addNumberPicker: function() {
        var fieldName = prompt("please enter your field's name:");
        this.state.formFields.push({ name: fieldName, type: 'number' });
        this.setState({formFields: this.state.formFields});
        toastr.success('Number Picker added!');
    },

    getFormName: function() {
        var formName = prompt("please enter your form's name:");
    },

    saveForm: function() {
        toastr.success('Form saved!');
    },

    render: function() {
        return (
            <div className="jumbotron">
                <h1>Create A Form</h1>
                <br/>
                <button className="btn btn-primary btn-lg" onClick={this.getFormName}>Create!</button>

                <FormTemplate name="my form" formFields={this.state.formFields}/><br/>

                <button className="btn dropup" onClick={this.addTextBox}>Textbox</button> 
                <button className="btn btn-primary btn-md" onClick={this.addNumberPicker}>NumberPicker</button>
                <br/><br/>
                <button className="btn dropdown-menu-right" onClick={this.saveForm}>Save</button>
            </div>
        );
    }
});

module.exports = CreatePage;