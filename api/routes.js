const express = require('express');

function routes() {
    const router = express.Router();
    var ingredientCategory = require('./repository/ingredientCategory/ingredientCategory.routes')(router);
    var ingredient = require('./repository/ingredient/ingredient.routes')(router);
    var recipeStep = require('./repository/recipeType/recipeType.routes')(router);
    var recipe = require('./repository/recipe/recipe.routes')(router);
    var recipeFull = require('./repository/fullRecipe/fullRecipe.routes')(router);

    return router;
}

module.exports = routes;