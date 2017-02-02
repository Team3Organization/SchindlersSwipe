"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var FormTemplate = require('./FormTemplate');
var Fab = require('./Fab');
var toastr = require('toastr');
var HttpClient = require('../common/httpClient');

var CreatePage = React.createClass({
    PropTypes: {
    },
    getInitialState: function () {
        return {
            name: "",
            formFields: [],
            allUsers: [],
            myUser: ""
        };
    },

    addUsersDetails: function () {
        this.state.formFields.push({ type: "UserDetails" });
        this.setState({ formFields: this.state.formFields });
        toastr.success('User Details added succesfully!');
    },

    addTextBox: function () {
        var fieldName = prompt("please enter your field's name:");
        this.state.formFields.push({ name: fieldName, type: 'text' });
        this.setState({ formFields: this.state.formFields });
        toastr.success('Textbox added succesfully!');
    },

    addDate: function () {
        var fieldName = prompt("please enter your field's name:");
        this.state.formFields.push({ name: fieldName, type: 'date' });
        this.setState({ formFields: this.state.formFields });
        toastr.success('Date added succesfully!');
    },

    addNumberPicker: function () {
        var fieldName = prompt("please enter your field's name:");
        this.state.formFields.push({ name: fieldName, type: 'number' });
        this.setState({ formFields: this.state.formFields });
        toastr.success('Number Picker added succesfully!');
    },

    addRadioButton: function () {
        var fieldName = prompt("please enter your field's name:");
        var radioButtonOptions = prompt("pleasr enter the options, seperated with commas:").split(',');
        this.state.formFields.push({ 
            name: fieldName, 
            type: 'radio', 
            extraData: [
                { options: radioButtonOptions }
        ]});
        this.setState({formFields: this.state.formFields});
        toastr.success('radio button added succesfully!');
    },

    createForm: function () {
        var formName = prompt("please enter your form's name:");
        this.setState({ name: formName });
    },

    logState: function () {
        console.log(this.state);
    },

    getData: function() {
        var client = new HttpClient();

        client.get('http://schindlerswipe.azurewebsites.net/api/forms', function(response) {
            console.log(JSON.parse(response));
        });
    },

    postData: function() {
        var client = new HttpClient();

        client.post('http://schindlerswipe.azurewebsites.net/api/forms', null, function(response) {
            console.log(response);
        });
    },

    onFormNameChanged: function(event) {
        this.setState({name: event.target.value});
    },

    saveForm: function() {
        var client = new HttpClient();

        client.post('http://schindlerswipe.azurewebsites.net/api/forms', null, function(response) {
            console.log(response);
        });
    },

    moveToNextStep: function() {
        var client = new HttpClient();

        client.get('http://schindlerswipe.azurewebsites.net/api/General/GetAllUsers', function(response) {
            this.state.allUsers = response;
        });
    },

    render: function () {
        return (
            <div className="row">            
                <div id="createdForm" className="col-md-5">
                    <h2>Create A Form</h2>
                    <input type="text" placeholder="your form's name" onChange={this.onFormNameChanged}/><br />
                    <div>
                        <FormTemplate name={this.state.name} formFields={this.state.formFields} /><br />
                    </div>

                    <nav className="fabcontainer">
                        <button className="buttons" onClick={this.addUsersDetails}>UserDetails</button>
                        <button className="buttons" onClick={this.addRadioButton}>RadioButton</button>
                        <button className="buttons" onClick={this.addDate}>Date</button>
                        <button className="buttons" onClick={this.addNumberPicker}>Number</button>
                        <button className="buttons" onClick={this.addTextBox}>Text</button>
                        <button className="buttons fabMainBtn">+</button>
                    </nav>
                </div>
               
                <div className="col-md-2">
                    <button id="nextStepBtn" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" onClick={this.moveToNextStep}>
                        To The Next Step
                    </button>
                </div>

                <div id="approvalFlowChart" className="col-md-5">
                </div>
            </div>

        );
    }
});

module.exports = CreatePage;