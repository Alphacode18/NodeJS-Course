const path = require('path');

const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const homeData = require('./routes/home');
const userRouter = require('./routes/users');

app.use('/', (req, res, next)=> {
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(homeData.router);
app.use(userRouter);

app.use((req, res, next) => {
    res.status('404').send('<h1>404 Error: Page Not Found</h1>');
})

app.listen(3000);