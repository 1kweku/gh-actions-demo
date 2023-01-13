//destructuring so we can use Model and DataTypes from sequeluze 
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {}
//init is used to initialize model, which creates column 
Book.init(
  {
    book_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING
    },
    author: {
      type: DataTypes.STRING
    },
    isbn: {
      type: DataTypes.STRING
    },
    pages: {
      type: DataTypes.INTEGER
    },
    edition: {
      type: DataTypes.INTEGER
    },
    is_paperback: {
      type: DataTypes.BOOLEAN
    }
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    modelName: 'book'
  }
);

module.exports = Book;
