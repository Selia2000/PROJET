PROJET

the project is about online library

It is an app that will allow every kind of people (student,children, doctor,workers) to have a lot of book to read without having to go to a physical library. They can let some comments after reading a book. This will help others people in their choice to read one book

**Getting Started Download links from Github:

Prerequisites You need a working environment with:

Git - You can install it from https://git-scm.com/downloads. MySQL - You can install it from https://www.mysql.com/downloads/. Node.js - Install node.js from https://nodejs.org/es/ Postman- Install from https://www.postman.com/downloads/ sequelieze express

Installing

The best option to start with this project is cloning it in your PC: git clone https://github.com/Selia2000/project-

This project contains 2 different parts: Frontend Backend

Once you have cloned the project install all dependencies. cd projetDecembre/Book/frontend npm install

cd projetDecembre/Book/backend npm install

For your backend part: We need a database working

Create the mysql database, that in our case is "db_books"

Finally to start enjoying this project. cd projetDecembre/Book/backend node.js

cd projetDecembre/Book/frontend ionic serve

You can test with postman there are some requests that can help: localhost:8080/api/books with the method GET //to get all the books in the database localhost:8080/api/books with the method POST //to create a new books localhost:8080/api/books/id with the method PUT //to update a new books localhost:8080/api/books/id with the method DELETE //to delete a new books
