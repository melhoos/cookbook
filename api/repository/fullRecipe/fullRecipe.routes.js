const _fullRecipe = require('./fullRecipe.repository');
const dbContext = require('../../database/dbContext');

module.exports = function (router) {
    const fullRecipeRepository = _fullRecipe(dbContext);
    router.route('/fullRecipe/:id')
        .get(fullRecipeRepository.getFull);
}