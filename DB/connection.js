const mongoose = require('mongoose');
const URI = 'mongodb+srv://PrernaSharma:pidev@development.acgyo.mongodb.net/listOn?retryWrites=true&w=majority';

module.exports = connectDB = () => {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
    console.log('MongoDB Atlas Connected…')
    })
    .catch(err => console.log("Fails to disconnect", err));
} 



// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://PrernaSharma:<password>@development.acgyo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });