// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log("unable to connect to server");
  }
  console.log("Connected To server succesfully");
//delete Many
// db.collection('Users').deleteMany({Name: 'Syed Imran'}).then((result) => {
// console.log(result);
// });

//deleteOne
db.collection('Users').findOneAndDelete({_id : new ObjectID("5a33a7f871000653baf1fec3")}).then((result) => {
  console.log(result);
});


//find one and delete


//db.close()
});
