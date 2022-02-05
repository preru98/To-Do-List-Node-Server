const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');


let mongod; 

const getInstance = async () => {
    if(!mongod){
        mongod = await MongoMemoryServer.create(); 
    }
    return mongod;
}




module.exports = {

    

    connect : async () => {
        const URI = await (await getInstance()).getUri();
        const mongooseOps = {
            useNewUrlParser: true,
            useUnifiedTopology: true, 
            poolSize: 10
        };
        await mongoose.connect(URI, mongooseOps);
    },

    disconnect : async () => {
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
        await mongod.stop();
    },

    clearDatabase : async () => {
        const allCollections = mongoose.connection.collections;
        for (const key in allCollections){
            const collection = allCollections[key];
            await collection.deleteMany();
        }
    }
}
