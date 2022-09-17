const { mvc } = require('lemons.js');
const fs = require('node:fs');

module.exports = new mvc({
    route: '/',
    method: 'get',
    title: 'lemon.js',
    description: 'lemon.js is a simple, lightweight, and easy to use web framework for Node.js.',

    run(req, res) {
        return `
            <html>
                <head>
                    <title>${this.title}</title>
                    <meta name="description" content="${this.description}">
                    <link rel="stylesheet" href="/css/main.css">
                </head>
                <body>
                    <h1>Edit <a href="https://github.com/BTX-ON-YT/lemon.js/wiki/Geting-Started">views/index.js</a> to get started</h1>
                    <img src="/public/lemon.png" alt="lemon.js logo">
                </body>
            </html>
        `;
    }
});