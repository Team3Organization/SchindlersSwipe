var http = require('http');
var express = require('express');
var app = express();
var algoUtils = require('./AlgoUtils.js');



app.get('/CreateNewFlowTemplate', function (req, res) {  
	var graphTemp = [
		{
			UserID : 1,
			Name : 'Me',
			Children : [2,3]
		},
		{
			UserID : 2,
			Name : 'קבמ',
			Children : [4]
		},
		{
			UserID : 3,
			Name : 'וייצי',
			Children : [4]
		},
		{
			UserID : 4,
			Name : 'עומר דגן',
			Children : []
		}
	];
    
	res.end(JSON.stringify(algoUtils.TopologicalSort(graphTemp)));
});
app.post('/CreateNewFlowInstance', function (req, res) {
    res.end( data );   
});
app.post('/UpdateFlowState', function (req, res) {
    res.end( data );   
});
app.post('/GetFlowGraph', function (req, res) {          
    res.end( data );   
});

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
});
