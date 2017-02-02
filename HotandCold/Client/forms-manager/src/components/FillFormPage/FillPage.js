"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var FormTemplate = require('..//CreateFormPage/FormTemplate');
var FormsApi = require('../common/formsApi');

var FillPage = React.createClass({
    getInitialState: function () {
        return {
            name: "",
            formFields: []
        };
    },

    getAllTemplates: function() {
         var templates = FormsApi.getAllTemplates();
    },

    getTemplatesById: function(p_id) {
         return FormsApi.getTemplateById(p_id);
    },

    setTemplatesById: function(p_id) {
         //var template = FormsApi.getTemplateById(p_id);
         var template = FormsApi.getAllTemplates()[1];
         this.setState({name: template.name, formFields: template.formFields});
    },

    render: function() {
        return (
            <div>
                <h1>Fill A Form</h1>
                <button onClick={this.setTemplatesById}>getAllTemplates</button>
                <FormTemplate name={this.state.name} formFields={this.state.formFields} />
            </div>
        );
    }
});

module.exports = FillPage;