const express = require("express");
const router = express.Router();
const RecipesController = require("../../controllers/recipes");

router.get("/", RecipesController.recipes_get_all);
router.get("/:id", RecipesController.recipe_get_by_id);

module.exports = router;
