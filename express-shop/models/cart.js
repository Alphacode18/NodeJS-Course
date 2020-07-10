const fs = require('fs');
const path = require('path');

const path = path.join(process.mainModule.filename,
    'data',
    'cart.json');

module.exports = class Cart {
    static addProduct(id, productPrice) {
        fs.readFile(path, (err, fileContent) => {
            let cart = {products: [], totalPrice: 0};
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
            cart.products = [...products];
            cart.products[existingProductIndex] = updatedProduct;
        }
        else {
            updatedProduct = {id: id, qty: 1};
            cart.products = [...products, updatedProduct];
        }
        cart.totalPrice += productPrice;
        fs.writeFile(path, JSON.stringify(cart), (err)=> {
            console.log(err);
        });
    };
}