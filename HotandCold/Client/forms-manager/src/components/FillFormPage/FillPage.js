"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var FormTemplate = require('..//CreateFormPage/FormTemplate');
var FormsApi = require('../common/formsApi');
var FormCard = require('../common/formCard');
var HttpClient = require('../common/httpClient');
var _ = require('lodash');

var FillPage = React.createClass({
    
    getInitialState: function () {
        return {
            name: "",
            formFields: [],
            templates: []
        };
    },

    getAllTemplates: function() {
         //var templates = FormsApi.getAllTemplates();
        var vm = this;
        var client = new HttpClient();

        client.get('http://schindlerswipe.azurewebsites.net/api/General/GetAllFormTemplates', function(response) {
             vm.setState({templates: JSON.parse(response)});
        });
    },

    getTemplatesById: function(p_id) {
         return FormsApi.getTemplateById(p_id);
    },

    setTemplatesById: function(p_id) {
         //var template = FormsApi.getTemplateById(p_id);
         var template = _.find(this.state.templates, {_id: p_id});
         this.setState({name: template.name, formFields: template.formFields});
    },

    setTemplatesByName: function(p_Name) {
         var template = FormsApi.getTemplateByName(p_Name);
         this.setState({name: template.name, formFields: template.formFields});
    },

    componentWillMount: function() {
        var vm = this;
        var client = new HttpClient();

        client.get('http://schindlerswipe.azurewebsites.net/api/General/GetAllFormTemplates', function(response) {
             vm.setState({templates: JSON.parse(response)});
        });
    },

    render: function() {
        var vm = this;
        //this.getAllTemplates();

        var templateCards = this.state.templates.map(function(template) {
            return <FormCard title={template.name} handleBtnClick={vm.setTemplatesById.bind(vm, template._id)}/>
        });
        return (
            <div>
                <h1>Fill A Form</h1>
                <row>
                <div className="col-md-3">
                    {templateCards}
                </div>
                <div className="col-md-9">
                <FormTemplate name={this.state.name} formFields={this.state.formFields} />
                </div>
                </row>
            </div>
        );
    }
});

module.exports = FillPage;