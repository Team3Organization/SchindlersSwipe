"use strict";

var React = require('react');

var Fab = React.createClass({
    render: function () {
        return(
            <nav className="fabcontainer"> 
            <button className="buttons">RadioButton</button>
            <button className="buttons">Number</button>
            <button className="buttons">Text</button>
            <button className="buttons fabMainBtn" tooltip="Share" href="#">+</button>
            </nav>
        );
    }
});

module.exports = Fab;








