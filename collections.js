const crud = require('./db');

// Задаем здесь список коллекция
const collections = {

myCollection: crud('myCollection'),
    //my_collection_name: crud('my_collection_name_in_db'),
};

module.exports = collections;
