const fs = require('fs');
const path = require('path');

module.exports = class Product {
    constructor(title) {
        this.title = title;

    }

    save() {
        const pathFile = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
        fs.readFile(pathFile, (err, fileContent) => {
            let products = [];
            if (!err) {
              products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(pathFile, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(callback) {
        const pathFile = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
        fs.readFile(pathFile, (err, fileContent) => {
            if (err) {
                callback([]);
            }
            callback(JSON.parse(fileContent));
        });
    }

};