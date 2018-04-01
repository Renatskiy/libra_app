const crud = require('./db');

// Задаем здесь список коллекция
const collections = {

myCollection: crud('myCollection'),
    users: crud('users'),

    // my_collection_name: crud('my_collection_name_in_db'),

};

// collections.myCollection.insert({name:'name'},{'sdfsdf':'book'})

module.exports = collections;
