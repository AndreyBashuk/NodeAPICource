const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/test', ( err, db ) => {
  if(err) {
    console.log("UNABLE TO CONNECT TO MONGODB");
    return;
  }
  db.collection('Todos').insertOne({
    'mongos':'lider'
  }, (err, result) => {
    // console.log(result.ops);
  });
  console.log('Connected to MongoDB server');

  db.collection('Todos').find().toArray().then((result) => {
    console.log(result);
  });
  db.close();
});
