const fs = require('fs');
const path = require('path');

const filePath = path.join(process.mainModule.filename,
    '..',
    'data',
    'cart.json');

module.exports = class Cart {
    static addProduct(id, productPrice) {
        let cart = {products: [], totalPrice: 0};
        fs.readFile(filePath, (err, fileContent) => {
            if (!err) {
                cart = JSON.parse(fileContent);
            }
        });
        const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
        const existingProduct = cart.products[existingProductIndex];
        let updatedProduct;
        if (existingProduct) {
            updatedProduct = {...existingProduct};
            updatedProduct.qty += 1;
            cart.products = [...cart.products];
            cart.products[existingProductIndex] = updatedProduct;
        }
        else {
            updatedProduct = {id: id, qty: 1};
            cart.products = [...cart.products, updatedProduct];
        }
        cart.totalPrice += productPrice;
        fs.writeFile(filePath, JSON.stringify(cart), (err)=> {
            console.log(err);
        });
    };
}