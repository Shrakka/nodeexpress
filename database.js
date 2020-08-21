// This file sets "_db" as a global variable accessible on all the app
const { MongoClient } = require("mongodb");
const { db: dbConfig } = require("./config");

let client;

Object.assign(module.exports, {
    connect,
    close
});

function connect(cb) {
    if (global._db) { cb(); }

    client = new MongoClient(dbConfig.uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    client.connect((err) => {
        if (err) { cb(err); }

        const _db = client.db(dbConfig.name);
        global._db = _db;
        cb();
    });
}

function close(cb) {
    if (! global._db) { return; }

    client.close((err) => {
        global._db = null;
        cb(err);
    });
}
