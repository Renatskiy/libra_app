const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const MongoClient = require('mongodb').MongoClient;
// var db;



app.use(bodyParser.json());


app.get('/', (req, res)=> res.send('Hello World'));



let BoOks = [
    {book: 'jungleBook',
        id: 1,
    },
    {book: 'thom soyer',
        id: 2,
    },
];

app.get('/books', (req, res)=> res.send(BoOks));

app.get('/books/:id', (req, res) => {
    var book4View = BoOks.find(function (BoOks) {
        return BoOks.id === Number(req.params.id)
    })
    res.send(book4View.book);
});

app.post('/books', (req, res)=> {
    let newBook = {
        book: req.body.item,
        id: Date.now(),
    };
    BoOks.push(newBook);
    res.send(BoOks);
});


app.put('/books/:id', (req, res)=> {
    var item = BoOks.find(function (BoOks) {
        return BoOks.id === Number(req.params.id)
    })
    console.log(item);
    item.book = req.body.book;
    res.sendStatus(200);
});

app.delete('/books/:id', (req, res)=> {
    BoOks = BoOks.filter(function (book) {
         return book.id !== Number(req.params.id)

        })
    res.sendStatus(200);
});


const collections = require('./collections');

// collections.myCollection.remove_one({_id: "cv884jKmMEHnkwWZ"})//удалить объект

// collections.myCollection.insert({name: 'huynahuy'});         // добавить объект

app.listen( 4000, () => console.log('Example app listening on port 4000!purupurum'));

// MongoClient.connect('mongodb://localhost:27017/mybase', function(err, database) {
//     if(err){
//        return console.log(err);
//     }
//     db = database;
//     app.listen( 4000, () => console.log('Example app listening on port 4000!NEW'));
//
// });