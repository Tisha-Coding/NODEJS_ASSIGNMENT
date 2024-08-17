// No need to install fs module
const fs = require('fs');

// Read > Open File + Read File
const buf = Buffer.alloc(1024); //original buffer
fs.open('nodejs_architecture.txt', 'r+', function(err, fd)
{
    if(err)
    {
        console.log('Error in opening file');
    }
    else
    {
        console.log('Success in opening file');
    }
    fs.read(fd,buf,0, buf.length, 0, function(error, bytes)
{
    if(error)
    {
        console.log('Error in reading file');
    }
    else
    {
        console.log('Success in reading file');
        // creating the clone of the buffer
        console.log('Data: ',buf.slice(0,bytes).toString());
    }
})
})
