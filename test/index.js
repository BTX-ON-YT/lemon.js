const { lemon } = require('lemons.js');

const server = new lemon({
    port: 3000,
    host: 'localhost',
    debug: true
});

server.useFolder(__dirname + '/css', '/css/');
server.useFolder(__dirname + '/public', '/public/');

server.register(__dirname + '/views');