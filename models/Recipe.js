const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipesSchema = new Schema({
  recipeName: String,
  imageUrl: String,
  postType: String,
  date: {
    type: Date,
    default: new Date()
  },
  summary: String,
  ingredients: String,
  instructions: String
});

module.exports = mongoose.model("Recipe", RecipesSchema);
