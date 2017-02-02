"use strict";

module.exports = function() {
    this.get = function(p_Url, p_Callback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                p_Callback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", p_Url, true );            
        anHttpRequest.send( null );
    },
    this.post = function(p_Url, p_Params, p_Callback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.open("POST",p_Url, true);

        anHttpRequest.setRequestHeader("Content-type", "application/json");
        //anHttpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                p_Callback(anHttpRequest.responseText);
        }
        anHttpRequest.send(p_Params);
    }
}