"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var FormTemplate = require('..//CreateFormPage/FormTemplate');
var FormsApi = require('../common/formsApi');
var FormCard = require('../common/formCard');

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
         var template = FormsApi.getTemplateById(p_id);
         this.setState({name: template.name, formFields: template.formFields});
    },

    setTemplatesByName: function(p_Name) {
         var template = FormsApi.getTemplateByName(p_Name);
         this.setState({name: template.name, formFields: template.formFields});
    },

    render: function() {
        var vm = this;
        var templates = FormsApi.getAllTemplates();

        var templateCards = templates.map(function(template) {
            return <FormCard title={template.name} handleBtnClick={vm.setTemplatesByName.bind(vm, template.name)}/>
        });
        return (
            <div>
                <h1>Fill A Form</h1>
                {templateCards}
                <FormTemplate name={this.state.name} formFields={this.state.formFields} />
            </div>
        );
    }
});

module.exports = FillPage;