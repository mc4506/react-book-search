const Book = require('../models/Book');

module.exports = {
    findAll: async (req, res) => {
        try {
            const results = await Book.find();
            res.json(results);
        }
        catch (err) {
            console.log(err);
            res.send("Error: Cannot find saved books");
        }
    },
    saveBook: async (req, res) => {
        try{
            const results = await Book.create(req.body)
            res.json(results);
        }
        catch (err) {
            console.log(err);
            res.send("Error: Cannot save book");
        }
    },
    deleteById: async (req, res) => {
        try {
            const results = await Book.remove({_id: req.params.id});
            res.json(results);
        }
        catch (err) {
            console.log(err);
            res.send("Error: Cannot delete book");
        }
    }
}