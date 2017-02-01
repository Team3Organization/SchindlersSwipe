"use strict";

var React = require('react');

var Fab = React.createClass({
    render: function () {
        return(
            <nav className="fabcontainer"> 
            <a href="#" className="buttons" tooltip="Google+"></a>
            <a href="#" className="buttons" tooltip="Twitter"></a>
            <a href="#" className="buttons" tooltip="Facebook"></a>
            <a className="buttons" tooltip="Share" href="#"></a>
            </nav>
        );
    }
});

module.exports = Fab;








