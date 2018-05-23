const mongoose = require("mongoose");
const Recipe = require("../models/Recipe");

exports.recipes_get_all = async (req, res, next) => {
  const allRecipes = await Recipe.find({});
  await res.status(200).json(allRecipes);
};

exports.recipe_get_by_id = async (req, res, next) => {
  const id = req.params.id;
  const recipe = await Recipe.findOne({ _id: id });
  await res.status(201).json(recipe);
};
