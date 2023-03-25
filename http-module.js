// http

const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(res);
    res.write("hello world");
    res.end();
});

server.listen(8080);