const _ingredient = require('./ingredient.repository');
const dbContext = require('../../database/dbContext');

module.exports = function (router) {
    const ingredientRepository = _ingredient(dbContext);
    router.route('/ingredients')
        .get(ingredientRepository.getAll);
    router.route('/ingredientsByCategoryId/:id')
        .get(ingredientRepository.getAllByCategoryId);
    router.route('/ingredientById/:id')
        .get(ingredientRepository.getById);
    router.route('/ingredientsByRecipeId/:id')
        .get(ingredientRepository.getAllByRecipeId)
    router.route('/ingredient')
        .post(ingredientRepository.post);
    router.route('/ingredient/:id')
        .delete(ingredientRepository.delete)
}