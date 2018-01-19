const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create our recipe schema
const RecipesSchema = new Schema({
  recipeName: String,
  imageUrl: String,
  postType: String,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Recipe', RecipesSchema);