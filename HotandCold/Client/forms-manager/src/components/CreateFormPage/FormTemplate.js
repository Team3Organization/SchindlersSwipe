"use strict";

var React = require('react');
var TextInput = require('../common/textInput');

var FormTemplate = React.createClass({
    PropTypes: {
        author: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    },

    getInitialState: function() {
        return {
            formFields: [
                { id: '1', name: 'moshe', type: 'text' }
            ]
        };
    },

    addTextBox: function() {
        this.state.formFields.push({ id: '2', name: 'koren', type: 'text' });
        this.setState({formFields: this.state.formFields});
    },

    render: function () {
        var fieldsToRender = this.state.formFields.map((item) => (
            <div>
                <label>{item.name}: </label>
                <input key={item.id} type={item.type}/>
            </div>
        ))

        return(
            <form>
                <h1>My form</h1>
                {fieldsToRender}
                <br/>
                <button onClick={this.addTextBox}>Click Me</button>
            </form>
        );
    }
});

module.exports = FormTemplate;