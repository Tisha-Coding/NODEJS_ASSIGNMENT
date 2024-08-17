const fs = require('fs');

// Deleting the file

fs.unlink('nodejs_architecture.txt', function(err)
{
    if(err)
    {
        console.log('Error in detecting file');
    }
    else
    {
        console.log('File Deleted Successfully.');
    }
})