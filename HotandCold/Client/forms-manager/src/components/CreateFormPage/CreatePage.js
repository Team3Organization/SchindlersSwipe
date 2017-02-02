"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var FormTemplate = require('./FormTemplate');
var Fab = require('./Fab');
var toastr = require('toastr');

var CreatePage = React.createClass({
    PropTypes: {
        myUser: React.PropTypes.string,
        allUsers: React.PropTypes.array
    },
    getInitialState: function () {
        return {
            name: "",
            formFields: []
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

    saveForm: function () {
        console.log(this.state);
        toastr.success('Form saved!');
    },

    moveToNextStep: function() {
        //$('.fabcontainer').disable();
        //$('#createdForm').disable();

        // GoToServer and get me
        this.props.myUser = "chen goren";

        // GoToServer and get all users
        this.props.allUsers = [];
    },

    render: function () {
        return (
            <div className="row">            
                <div id="createdForm" className="col-md-5">
                    <h2>Create A Form</h2>
                    <input type="text" placeholder="your form's name" /><br />
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
                    <button id="nextStepBtn" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
                        To The Next Step
                    </button>
                </div>

                <div id="approvalFlowChart" className="col-md-5">

                    <div className="demo-card-wide mdl-card mdl-shadow--2dp">
                        <div className="mdl-card__title">
                            <h2 className="mdl-card__title-text">Name:{this.props.myUser}</h2>
                        </div>
                        <div className="mdl-card__supporting-text">
                        </div>
                        <div className="mdl-card__actions mdl-card--border">
                            <span className="mdl-chip">
                                <span className="mdl-chip__text">Roye W</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
});

module.exports = CreatePage;