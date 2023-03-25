const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('welcome to home page');
    } 
    if  (req.url === '/about'){
        res.end("welcome to about page");
    }
     else {
        res.end(`<h1>oops no page is avaliable</h1>`);
    }
})

server.listen(8080);