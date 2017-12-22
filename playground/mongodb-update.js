// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log("unable to connect to server");
  }
  console.log("Connected To server succesfully");

// db.collection("Todos").findOneAndUpdate({_id: new ObjectID('5a317d2d86285f0bdc582068')}, {
//   $set: {
//     completed: true
//   }
// }, {
//     returnOriginal: false
// }).then((result) => {
//     console.log(result);
//
//   })

  db.collection("Users").findOneAndUpdate({_id: new ObjectID('5a33a7cd71000653baf1feb5')}, {
    $set: {
      Name: 'Imran'
    },
    $inc: {
      Age: 1
    }

  }, {
      returnOriginal: false
  }).then((result) => {
      console.log(result);

    })
});
