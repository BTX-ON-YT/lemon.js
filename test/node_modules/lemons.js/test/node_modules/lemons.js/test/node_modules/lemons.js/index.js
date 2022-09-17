const fs = require('node:fs');
const path = require('node:path');
const express = require('express');

class lemon {
    constructor(data) {
        this.data = data;

        this.app = express();

        this.app.listen(this.data.port, this.data.host, () => {
            console.log(`lemon.js is running on port ${this.data.port}...`);
        });
    }

    register(folder) {
        this.folder = folder;

        this.viewsPath = path.join(folder);
        this.viewsFiles = fs.readdirSync(this.viewsPath).filter(file => file.endsWith('.js'));

        for (const file of this.viewsFiles) {
            const view = require(`${this.viewsPath}/${file}`);

            const route = view.data.route;
            this.app.get(route, (req, res) => {
                res.send(view.data.run(req, res));
            });
        }
    }

    useFolder(folder, route) {
        const folderPath = path.join(folder);
        const folderFiles = fs.readdirSync(folderPath);

        for (const file of folderFiles) {
            this.app.get(route + file, (req, res) => {
                res.sendFile(`${folderPath}/${file}`);
            });
        }
    }
}

class mvc {
    constructor(data) {
        this.data = data;
    }
}

module.exports = {
    lemon,
    mvc
};