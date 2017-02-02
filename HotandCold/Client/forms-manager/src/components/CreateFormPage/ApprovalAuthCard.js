"use strict";

var React = require('react');

var ApprovalAuthCard = React.createClass({
    PropTypes: {
        userName: React.PropTypes.string.isRequired,
        approveUsers: React.PropTypes.array,
        addFunc: React.PropTypes.func
    },

    addApprovalAuthority: function() {

    },

    render: function () {
        return (    
            <div className="demo-card-wide mdl-card mdl-shadow--2dp" id="approvalAuthorityCard">
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">User: {this.prop.userName}</h2>
                </div>
                <div className="mdl-card__actions mdl-card--border">
                    <span className="mdl-chip" onClick={this.prop.addFunc}>
                        <span id="addChip" className="mdl-chip__text">Add</span>
                    </span>
                </div>
            </div>
        );
    }
});

module.exports = ApprovalAuthCard;