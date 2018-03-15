
const { MongoClient } = require('mongodb');
const Grid            = require('mongodb').GridFSBucket;
const mongo_url       = 'mongodb://localhost:27017/mybase';
const id              = require('./random_id');

const mongo_connector = async  () => {
    if (!this.db) {
        let connection = await MongoClient.connect(mongo_url, { poolSize: 200 });
        this.db = await connection.db('proc');
        this.grid = new Grid(this.db, 'fs');
    }
    return { db: this.db, grid: this.grid };
};


const collection = (name) => {
    return {
        async get_connection() {
            if (!this.connection) {
                this.connection = await mongo_connector();
                this.grid = this.connection.grid;
            }
            return this.connection.db.collection(name);
        },
        async insert(doc) {
            if (!doc._id) {
                doc._id = id();
            }
            return (await this.get_connection()).insert(doc);
        },
        async insert_one(doc) {
            if (!doc._id) {
                doc._id = id();
            }
            return (await this.get_connection()).insertOne(doc);
        },
        async insert_many(docs) {
            docs.forEach(doc => {
                if (!doc._id) {
                    doc._id = id();
                }
            });
            return (await this.get_connection()).insertMany(docs);
        },
        async find(doc) {
            return (await this.get_connection()).find(doc).toArray();
        },
        async find_cursor(doc) {
            return (await this.get_connection()).find(doc);
        },
        async find_one(doc) {
            return (await this.get_connection()).findOne(doc);
        },
        async remove_one(doc) {
            return (await this.get_connection()).deleteOne(doc);
        },
        async remove_many(doc) {
            return (await this.get_connection()).deleteMany(doc);
        },
        async replace_one(filter, doc) {
            return (await this.get_connection()).replaceOne(filter, doc);
        },
        async update_one(filter, doc) {
            return (await this.get_connection()).updateOne(filter, doc);
        },
        async upsert_one(filter, doc) {
            return (await this.get_connection()).updateOne(filter, doc, { upsert: true });
        }
    };
};

module.exports = collection;

