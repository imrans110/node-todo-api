// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log("unable to connect to server");
  }
  console.log("Connected To server succesfully");
  db.collection('Todos').insertOne({
    text: "Some data here",
    completed: false
  },(err, result) => {
      if(err){
        return console.log("Something wrong could not insert data");
      }
      console.log(JSON.stringify(result.ops, undefined, 2));
  });

  // db.collection('Users').insertOne({
  //   Name: "Syed Imran",
  //   Age: 23,
  //   Location: "Delhi"
  // },(err, result) => {
  //   if(err){
  //     return console.log("Something wrong could not insert data");
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
  //
  // });


  db.close();
});
