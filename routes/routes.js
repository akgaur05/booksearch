const router = require("express").Router();
const db = require("../models");

router.get("/books", (req, res) => {
    db.Book.find({})
    .then(function(books) {
        res.status(200).json(books);
    })
})
router.post("/books", (req, res) => {
    const info = {title: req.body.title, authors: req.body.authors, synopsis: req.body.synopsis,
    thumbnail: req.body.thumbnail, link: req.body.link}
    db.Book.create(info)
    .then(function(book) {
        res.status(200).json(book);
    }).catch(err => console.log(err))
})
router.delete("/books/:id", (req,res) => {
    const id = req.params.id;
    db.Book.findByIdAndDelete({_id:id})
    .then(function(response) {
        res.status(200).json(response);
    })
})

module.exports = router;