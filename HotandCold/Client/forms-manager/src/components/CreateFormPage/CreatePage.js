"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var FormTemplate = require('./FormTemplate');
var toastr = require('toastr');

var CreatePage = React.createClass({
    getInitialState: function () {
        return {
            name: "",
            formFields: []
        };
    },

    addUsersDetails: function() {
        this.state.formFields.push({type: "UserDetails"});
        this.setState({formFields: this.state.formFields});
        toastr.success('User Details added succesfully!');
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
        toastr.success('Number Picker added succesfully!');
    },

    addRadioButton: function() {
        var fieldName = prompt("please enter your field's name:");
        var radioButtonOptions = prompt("pleasr enter the options, seperated with commas:").split(',');
        this.state.formFields.push({ name: fieldName, type: 'radio', options: radioButtonOptions });
        this.setState({formFields: this.state.formFields});
        toastr.success('radio button added succesfully!');
    },

    createForm: function() {
        var formName = prompt("please enter your form's name:");
        this.setState({name: formName});
    },

    saveForm: function() {
        console.log(this.state);
        toastr.success('Form saved!');
    },

    render: function() {
        return (
            <div>
                <h2>Create A Form</h2>
                <input type="text" placeholder="your form's name"/><br/>
                <div>
                    <FormTemplate name={this.state.name} formFields={this.state.formFields}/><br/>
                    <button className="btn btn-primary btn-md" onClick={this.addTextBox}>Textbox</button> 
                    <button className="btn btn-primary btn-md" onClick={this.addNumberPicker}>NumberPicker</button>
                    <button className="btn btn-primary btn-md" onClick={this.addRadioButton}>RadioButton</button>
                    <button className="btn btn-primary btn-md" onClick={this.addUsersDetails}>UserDetails</button>
                    <br/><br/>
                    <button className="btn dropdown-menu-right" onClick={this.saveForm}>Save</button>
                </div>
            </div>
        );
    }
});

module.exports = CreatePage;