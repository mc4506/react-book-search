const Book = require('../models/Book');

module.exports = {
    findAll: async (req, res) => {
        try {
            // const total = await Book.count();
            const results = await Book.find()
                .skip(req.body.index)
                .limit(10);
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
            const results = await Book.findByIdAndDelete(req.params.id);
            res.json(results);
        }
        catch (err) {
            console.log(err);
            res.send("Error: Cannot delete book");
        }
    }
}