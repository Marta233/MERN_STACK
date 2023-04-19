const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const Db = process.env.MongoDb;
// const client = new MongoClient(Db, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// var _db;

// module.exports = {
//   connectToServer: function (callback) {
//     client.connect(function (err, db) {
//       // Verify we got a good "db" object
//       if (db) {
//         _db = db.db("Fouremdb");
//         console.log("Successfully connected to MongoDB.");
//       }
//       return callback(err);
//     });
//   },

//   getDb: function () {
//     return _db;
//   },
// };

const url = process.env.MongoDb;

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: false,
};
module.exports = {
  connectToServer: function (callback) {
    mongoose
      .connect(url, connectionParams)
      .then(() => {
        console.log("Connected to the database ");
      })
      .catch((err) => {
        console.error(`Error connecting to the database. n${err}`);
      });
  },
};
