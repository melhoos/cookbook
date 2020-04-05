const _recipe = require('./recipe.repository');
const dbContext = require('../../database/dbContext');

module.exports = function (router) {
    const recipeRepository = _recipe(dbContext);
    router.route('/recipes')
        .get(recipeRepository.getAll);
    router.route('/recipesByRecipeTypeId/:id')
        .get(recipeRepository.getAllByRecipeTypeId);
    router.route('/recipe')
        .post(recipeRepository.post);
    router.route('/recipe/:id')
        .put(recipeRepository.put)
        .delete(recipeRepository.delete);
}