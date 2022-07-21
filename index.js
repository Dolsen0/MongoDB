//cloud.mongodb.com
//import mongo database / library
const {MongoClient, ServerApiVersion, } = require("mongodb");

//connect to Mongo Atlas account USING a URL connection string.

const {uri} = require('./dbsecrets.js');


//conects to URI listed above and names it as client

const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1});

//connect to sample database
const db = client.db('sample_mflix');

// Query

// Specific movie (doc) from movies collection (collection).
// search by title for "Back to the Future"


db.collection('movies')
    .findOne({title: 'Back to the Future'}, (err, results) => {
    if(err){
        console.error(err);
    }
    console.log(results);
    client.close(); // close out of DB after search query
});

