// var mongoClinet = require("mongodb").MongoClient;
// var connectionString  = "mongodb://localhost:27017";
// mongoClinet.connect(connectionString,function(err,clientObj){
//     if(!err){
//         var dbo = clientObj.db("shopDB");
//         dbo.collection("Products").find().toArray(function(err,documents){
//             if(!err){
//                 console.log(documents);
//             }else{
//                 console.log(err);
//             }
//         })
//     }else{
//         console.log(err.message);
//     }
// });

console.log("Helllo Mongo");

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
MongoClient.connect(url, function(err, client) {
    if (err) {
      console.error('Error occurred while connecting to MongoDB:', err);
      return;
    }
    console.log('Connected successfully to MongoDB server');
  
    // Further code goes here
  
    client.close(); // Close the connection when finished
  });
  const db = client.db('shopDB');
  const collection = db.collection('Products');
  collection.find({}).toArray(function(err, documents) {
    if (err) {
      console.error('Error occurred while retrieving documents:', err);
      return;
    }
    console.log('Retrieved documents:', documents);
  });
      
