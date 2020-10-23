const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const path = require('path');

router.get("/api/books", bookController.findAll);
router.post("/api/books", bookController.saveBook);
router.delete("/api/book/:id", bookController.deleteById);

router.get("*", (req, res) => {
    res.sendFile(path.join(__dirame, "../client/build/index.html"));
});

