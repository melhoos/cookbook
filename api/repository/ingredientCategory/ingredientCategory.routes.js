const _ingredientCategory = require('./ingredientCategory.repository');
const dbContext = require('../../database/dbContext');

module.exports = function (router) {
    const ingredientCategoryRepository = _ingredientCategory(dbContext);
    router.route('/ingredientCategories')
        .get(ingredientCategoryRepository.getAll);
    router.route('/ingredientCategory')
        .post(ingredientCategoryRepository.post);
    router.route('/ingredientCategory/:id')
        .delete(ingredientCategoryRepository.delete)
}