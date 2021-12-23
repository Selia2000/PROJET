module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define("book",{
        title: {
            type: Sequelize.STRING
        },
        //page: {
          //  type: Sequelize.NUMBER
        //},

        author: {
            type: Sequelize.STRING
        }

    
    });

    return Book;
};