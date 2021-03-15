var express = require('express')
var app = express();

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log('Application Run At http://%s:%s')
})

// const MongoClient = require('mongodb').MongoClient;

// const url = 'mongodb://localhost:27017';
// const dbname = 'circulation';

// async function main() {
//     const client = new MongoClient(url);
//     await client.connect();

//     const admin = client.db(dbname).admin();
//     console.log(await admin.serverStatus());
//     console.log(await admin.listDatabase());
// }

// main();

