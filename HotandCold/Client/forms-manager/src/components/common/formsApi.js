"use strict";

//This file is mocking a web API by hitting hard coded data.
var templates = require('./formsHardcodedData').templates;
var _ = require('lodash');


var _clone = function(item) {
    return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var FormsApi = {
    getAllTemplates: function() {
        return templates;
    },

    getTemplateById: function(id) {
        var template = _.find(templates, {id: id});
        return _clone(template);
    },

    getTemplateByName: function(p_Name) {
        var template = _.find(templates, {name: p_Name});
        return _clone(template);
    }
};

module.exports = FormsApi;