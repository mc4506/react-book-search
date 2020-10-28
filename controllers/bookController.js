const Book = require('../models/Book');

module.exports = {
    findAll: async (req, res) => {
        try {
            // console.log(req.params.index);
            const total = await Book.count();
            const results = await Book.find()
                .skip(parseInt(req.params.index))
                .limit(10)
                .sort({'createdAt': -1});
            res.json([total, results]);
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