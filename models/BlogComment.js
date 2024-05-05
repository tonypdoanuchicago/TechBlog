// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class BlogComment extends Model {}

// set up fields and rules for Product model
BlogComment.init(
  {
    // define columns
    comment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    }, blog_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }, blog_title: {
        type: DataTypes.STRING,
        allowNull: false,
      }, blog_description: {
          type: DataTypes.STRING,
          allowNull: false,
        }, blog_timestamp: {
        type: DataTypes.BIGINT,
        allowNull: false,
      }, comment_description: {
        type: DataTypes.STRING,
        allowNull: false,
      }, comment_timestamp: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'BlogComment',
  }
);

module.exports = BlogComment;