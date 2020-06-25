const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Express Configuration Set Up For Templating Engine And View Folder Path
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use('/', (req, res, next)=> {
    next();
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.router); //first path adds a kind of prefix. Thus, it implicitly adds admin in the path inside adminRoutes.
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status('404').render('404.pug');
})

app.listen(3000);