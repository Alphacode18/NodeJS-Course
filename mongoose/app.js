const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/user');

const errorController = require('./controllers/error');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('5f239c042880341646939fc6')
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    'mongodb+srv://Shreyas:JfuB7VLhsMJIlNnv@node-course.q3zz2.mongodb.net/shop?retryWrites=true&w=majority'
  )
  .then((result) => {
    User.findOne()
      .then((user) => {
        if (!user) {
          const user = new User({
            name: 'Shreyas Kharbanda',
            email: 'skkhary@gmail.com',
            cart: {
              items: [],
            },
          });
          user.save();
        }
      })
      .catch((err) => {
        console.log(err);
      });
    app.listen(3000);
  })
  .catch((err) => {
    console.error(err);
  });
