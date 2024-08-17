// importing the http module

const http = require('http');

// creating the server and storing it inside variable
// req - request
// res - response

const server = http.createServer((req, res) =>
{
    if(req.url == '/')
    {
        res.write("<h1> I Am Happy To Learn Full Stack Web Development From PW Skills! </h1>");
    }

    res.end();
});

// starting the server 
server.listen(5008);

console.log("HTTP server is running on port 5008");


