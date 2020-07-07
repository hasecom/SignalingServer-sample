const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 8080;
var server = http.createServer(function(req,res){
    fs.readFile('./index.html','utf-8',doReard);
    function doReard(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
    }
});
server.listen(port,function(){
    console.log("listinging... PORT : " + port)
});