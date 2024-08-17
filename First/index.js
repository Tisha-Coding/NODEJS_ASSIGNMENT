// Importing the fs module

const fs = require('fs');

// Writing the data into the file

const a = 'Node.js is a single-threaded platform that uses an event-driven, non-blocking I/O model. It runs on the V8 JavaScript engine and efficiently handles multiple requests by using an event loop rather than creating new threads for each request. This makes Node.js fast and scalable, ideal for real-time applications.';
fs.writeFile('nodejs_architecture.txt', a , function(err)
{
    if(err)
    {
        console.log('Error in writing file');
    }
    else
    {
        console.log('Success in writing file');
    }
})
