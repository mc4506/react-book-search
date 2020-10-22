const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/book-routes.js');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
};

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/booksearch', {
    useNewUrlParser: true,
    useFindAndModify: false
});

app.use(routes);

app.listen(PORT, () => {
    console.log(`App running on port http://localhost:${PORT}`);
});

