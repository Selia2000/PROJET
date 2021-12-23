module.exports = app => {
    const books = require("../controllers/book.controller.js");

    var router = require("express").Router();

    //Create a new Bicycle
    router.post("/", books.create);
    
    //Retreive all books
    router.get("/", books.findAll);

    //Retreive a single Book with id
    router.get("/:id", books.findOne);

    //Update a Book with id
    router.put("/:id", books.update);

    //Delete a book with id
    router.delete("/:id", books.delete);

    app.use('/api/books',router);


};