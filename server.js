var express = require('express');
var app = express();
var http = require('http').Server(app);


app.use(express.static(__dirname));
app.get('/axixe', function(req, res, next){
	res.sendfile('axixe.html');
});


http.listen(3000, function(){
	console.log('listenting on 104.131.9.233:3000');
});
