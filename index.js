const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const MongoClient = require('mongodb').MongoClient;
// var db;
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(bodyParser.json());


app.get('/', (req, res)=> res.send('sdf'));



let books = [
    { bookId: 1,
        title: 'Большая книга CSS3.',
        descr: 'C помощью технологии CSS3 (каскадные таблицы стилей) можно создавать уникальные, современные оформления веб-сайтов. Но даже самый опытный веб-разработчик может не знать всех приемов применения CSS3. Прочитав в этой книге множество практических примеров, а также советов, вы перейдете на новый уровень создания сайтов с помощью HTML и CSS. Вы узнаете, как разрабатывать веб-страницы, которые одинаково быстро работают и одинаково выглядят, как на ПК, так и на смартфонах и планшетах. В книге рассмотрены следующие темы: - написание HTML5-, CSS3-тегов, которые распознаются во всех браузерах; - форматирование текста, добавление на страницы навигации; - создание таблиц и форм; - приемы веб-дизайна для создания уникального оформления сайтов; - создание сайтов для любых устройств с помощью адаптивного дизайна.',
        author: 'Дэвид Сойер Макфарланд',
        img: 'https://www.litres.ru/static/bookimages/09/45/03/09450331.bin.dir/09450331.cover.jpg',
        bookCount: 1,
    },
    { bookId: 2,
        title: ' JavaScript. Подробное руководство, 6-е издание',
        descr: 'C момента выхода первого издания в 1996 году книга «JavaScript: Подробное руководство» превратилась в библию программистов на JavaScript. За эти годы было издано более 500000 экземпляров, и веб-разработчики по-прежнему с восторгом отзываются о ней. Эта книга — одновременно и руководство программиста, и полноценный справочник по базовому языку JavaScript и клиентским прикладным интерфейсам, предоставляемым веб-броузерами. Книга делится на четыре части. Часть I охватывает сам язык JavaScript. Часть II охватывает клиентский JavaScript: прикладные программные интерфейсы JavaScript, определяемые стандартом HTML5 и сопутствующими ему стандартами и реализованные в веб-броузерах. Часть III книги представляет собой обширный справочник по базовому языку JavaScript, включающий описания всех классов, объектов, конструкторов, методов, функций, свойств и констант, определенных в JavaScript 1.8, V8 3.0 и ECMAScript 5. Часть IV — справочник по клиентскому JavaScript. Здесь описываются прикладные программные интерфейсы веб-броузеров, стандарт DOM API Level 3 и недавно вошедшие в стандарт HTML5 технологии WebSockets и WebWorkers, объекты localStorage и sessionStorage, а также теги «audio» и «video».',
        author: 'Дэвид Флэнаган' ,
        img: 'http://imgv2-1-f.scribdassets.com/img/document/241905806/original/51a28fb93e/1504853656',
        bookCount: 1,
    },
    { bookId: 3,
        title: 'Изучаем программирование на HTML5',
        descr: 'Хотите создавать динамичные, интерактивные, насыщенные данными веб-страницы? Почему бы не использовать HTML5 для создания полнофункциональных веб-приложений? И почему бы не делать это с помощью современных методик, которые так же легко применимы к вашему настольному браузеру, как и к мобильным устройствам? Вам, конечно же, захочется использовать такие новейшие HTML5-технологии, как API-интерфейс Geolocation, элемент video, 2D-рисование, API-интерфейсы Web Storage и Web Workers и т. д. Не так ли? С помощью данной книги вы научитесь создавать веб-приложения с использованием современных стандартов и передовых методик завтрашнего дня. Вы изучите основы новых API-интерфейсов HTML5 и узнаете, как они взаимодействуют со страницами и приводятся в движение JavaScript-кодом, а также как использовать их для создания веб-приложений, которые впечатлят ваше начальство и изумят друзей.',
        author: 'Эрик Фримен, Э. Робсон' ,
        img: 'http://bizlit.com.ua/image/cache/data/kniga-izuchaem-programmirovanie-na-html5-600x800.jpg',
        bookCount: 1,
    },

    { bookId: 4,
        title: 'Изучаем работу с jQuery',
        descr: 'Хотите добавить интерактивности своему интернет-сайту? Узнайте, как jQuery позволит вам создать целый набор скриптов, используя всего несколько строчек кода! С помощью этого издания вы максимально быстро научитесь работать с jQuery — этой удивительной библиотекой javascript, использование которой сегодня стало необходимостью для разработки современных веб-сайтов и RIA-приложений. jQuery помогает легко получать доступ к любому элементу DOM, обращаться к атрибутам и содержимому элементов DOM, а также предоставляет богатые возможности по взаимодействию с AJAX. Особенностью данного издания является уникальный способ подачи материала, выделяющий серию «Head First» в ряду множества скучных книг, посвященных программированию.',
        author: 'Р. Бенедетти, Р. Крэнли' ,
        img: 'http://bibla.ru/files/book_covers/58153.jpg',
        bookCount: 1,
    },
];

app.get('/books', (req, res)=> res.send(books));

app.get('/books/:id', (req, res) => {
    var book4View = books.find(function (books) {
        return books.bookId === Number(req.params.id)
    })
    res.send(book4View.book);
});

app.post('/book', (req, res)=> {
    let book = req.body;
    let newBook = {
            ...book,
        bookId: Date.now(),
    };
books.push(newBook);
    res.send(books);
});

app.patch('/books/:id',(req, res)=>{
    var item = books.find(function (books) {
        return books.id === Number(req.params.id)
    })
    console.log(item)
})


app.put('/books/:id', (req, res)=> {
    var item = books.find(function (books) {
        return books.id === Number(req.params.id)
    })
    console.log(item);
    item.book = req.body.book;
    res.sendStatus(200);
});

app.delete('/books/:id', (req, res)=> {
    books = books.filter(function (book) {
         return book.id !== Number(req.params.id)

        })
    res.sendStatus(200);
});


const collections = require('./collections');


app.listen( 4000, () => console.log('Example app listening on port 4000!purupurum'));

