const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  MongoClient
    .connect(
      `mongodb+srv://Shreyas:${process.env.PASSWORD}@node-course.q3zz2.mongodb.net/shop?retryWrites=true&w=majority`
    )
    .then(client => {
      console.log('Connected');
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
}

const getDB = () => {
  if (_db) {
    return _db
  }
  throw 'No Database Found';
}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;