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
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }
    save() {
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