const fs = require('fs');
const path = require('path');

const pathFile = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

const getProductFromFile = callback => {
    fs.readFile(pathFile, (err, fileContent) => {
        if (err) {
            return callback([]);
        }
        return callback(JSON.parse(fileContent));
    });
};

module.exports = class Product {
    constructor(title, imageUrl, price, description) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    }
    save() {
        this.id = Math.random().toString();
        getProductFromFile((products) => {
            products.push(this);
            fs.writeFile(pathFile, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(callback) {
        getProductFromFile(callback);
    }

};