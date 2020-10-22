const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    authors: Array,
    description: String,
    image: String,
    link: String,
})

BookSchema.set('timestamps', true);

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
