const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const homeRouter = require('./routes/home');
const userRouter = require('./routes/users');

app.use('/', (req, res, next)=> {
    next();
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.use(homeRouter);
app.use(userRouter);

app.use((req, res, next) => {
    res.status('404').send('<h1>404 Error: Page Not Found</h1>');
})

app.listen(3000);