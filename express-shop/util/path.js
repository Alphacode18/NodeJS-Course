const path = require('path');

module.exports = path.dirname(process.mainModule.filename);

/*
 * This gives us the directory path of the main
 * module that started the project -- app.js
 */