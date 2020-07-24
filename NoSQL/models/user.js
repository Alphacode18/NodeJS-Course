const mongodb = require('mongodb');
const { getDb } = require('../util/database');

class User {
  constructor(username, email) {
    (this.username = username), (this.email = email);
  }

  save() {
    const db = getDb();
    return db
      .collections('users')
      .insertOne(this)
      .then((result) => {
        console.log('User Added');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static findById(userId) {
    const db = getDb();
    return db
      .collections('users')
      .find({ id: new mongodb.ObjectID(userId) })
      .next()
      .then((user) => {
        return user;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = User;
