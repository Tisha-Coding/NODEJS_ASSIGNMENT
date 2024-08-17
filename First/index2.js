const fs = require('fs');

const a = 'Node.js offers several advantages, making it a popular choice for web development. Its event-driven, non-blocking I/O model ensures high performance and scalability, especially for real-time applications like chat services and online gaming. Node.js allows developers to use JavaScript for both front-end and back-end development, streamlining the development process. The vast ecosystem of npm packages provides tools and libraries for various functionalities, speeding up development. Additionally, Node.js has strong community support, which leads to continuous improvements and a wealth of learning resources. Its ability to handle multiple concurrent connections with minimal overhead makes it efficient and cost-effective for server-side applications.';

fs.appendFile('nodejs_architecture.txt', a , 'utf-8', function(err)
    {
                    if(err)
                    {
                        console.log('Error in appending file');
                    }
                    else
                    {
                        console.log('Success in appending file');
                    }
    })