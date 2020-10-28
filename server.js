const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/book-routes.js');

const app = express();

// attaching socket.io to express http
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
};

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/booksearch', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

io.on('connection', (socket) => {
    console.log('a user is connected over socket');
    socket.on('disconnect', ()=> {
        console.log('a user disconnected');
    });
    socket.on('saved book', (book) => {
        // console.log(book);
        io.emit('render save', book);
    })
});

http.listen(PORT, () => {
    console.log(`App running on port http://localhost:${PORT}`);
});

