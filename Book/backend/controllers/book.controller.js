const db = require("../models");
const Book = db.books;
const Comment = db.comments;
const Op = db.Sequelize.Op;

//Create and save a new book
exports.create = (req,res) => {
    //valide request
    if(!req.body.title){
        res.status(400).send({
            message: "Content can not be empty ! "
        });
        return;
    }
    //create a book
    const book = {
        title: req.body.title,
        author: req.body.author 
    };

    //Save Book in the database
    Book.create(book)
    .then(data => {
        res.send(data);

    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "some error occured while creating the book."
        });
    });

};


//Create and Save new Comments
exports.createComment = (bookId, comment) => {
    return Comment.create({
      name: comment.name,
      text: comment.text,
      bookId: bookId,
    })
      .then((comment) => {
        console.log(">> Created comment: " + JSON.stringify(comment, null, 4));
        return comment;
      })
      .catch((err) => {
        console.log(">> Error while creating comment: ", err);
      });
  };



//Retreive all Books from the database.
exports.findAll = (req,res) => {
    Book.findAll()
    .then(data => {
        res.send(data);

    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "some error occured while retreiving the book."
        });
    });

};



//Find a single Book with an id
exports.findOne = (req,res) => {
    const id =req.params.id;

    Book.findByPk (id)
        .then (data => {
            if(data){
                res.send(data);
            }
            else
            {
                res.status(404).send({
                    message: `cannot find Book with id = ${id}`
                });
            }
        })

        .catch(err => {
            res.status(500).send ({
                message: "Error retreining Tutorial with id " +id
            });
        });
     
    

};

//Update a Book with an id 
exports.update = (req,res) => {
    const id =  req.params.id;

    Book.update(req.body, {
        where: {id: id}
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Bookswas updated successfully ."
            });
        }
        else
        {
            res.send ({
                message: `Cannot update Books with id=${id}. May be Book was found or req.body is empty`
            });
        }
    })
    .catch(err => {

        res.status(500).send({
            message: "Error updating Book with id "+ id
        });
    });

};

//Delete a Book with the specified id in the request
exports.delete =(req, res) => {
    const id = req.params.id ;

    Book.destroy({
        where: {id:id}
    })

    .then(num =>
        {
            if(num  == 1)
            {
                res.send({message: 'Book was deleted successfully!!'});
            }
            else
            {
                res.send({message: `cannot delete Book with ${id} Maybe Book was not found`});
            }
        })

        .catch(err => {
            res.statut(500).send({message: 'could not delete book with id= '+ id});
        });

};

//get the comments for a given book

exports.findbookById = (bookId) => {
    return book.findByPk(bookId, { include: ["comments"] })
      .then((book) => {
        return book;
      })
      .catch((err) => {
        console.log("Error while finding book: ", err);
      });
  };

  //Get the comments for a given comment id

    /*exports.findCommentById = (id) => {
        return Comment.findByPk(id, { include: ["tutorial"] })
            .then((comment) => {
            return comment;
        })
        .catch((err) => {
            console.log(">> Error while finding comment: ", err);
        });
  };*/

  //Get all books include comments

  /*exports.findAll = () => {
    return Book.findAll({
      include: ["comments"],
    }).then((books) => {
      return books;
    });
  };*/



