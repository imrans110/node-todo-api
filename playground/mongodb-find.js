// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log("unable to connect to server");
  }
  console.log("Connected To server succesfully");

db.collection('Todos').find({completed: false}).toArray().then((docs) => {
      console.log(JSON.stringify(docs, undefined, 2));
},(err) => {
  console.log("Unable to fetch todos", err);
});


  // db.collection('Todos').find().toArray((err, results) => {
  //   if(err) {
  //     return console.log(err);
  //   };
  //   console.log(JSON.stringify(results, undefined, 2));
  // });

});
