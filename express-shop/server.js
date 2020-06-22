const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express(); 

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use('/', (req, res, next)=> {
    next();
});

app.use(bodyParser.urlencoded({extended:true}));

app.use('/admin', adminRoutes); //first path adds a kind of prefix. Thus, it implicitly adds admin in the path inside adminRoutes.
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status('404').sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3000);