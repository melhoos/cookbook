const _recipeType = require('./recipeType.repository');
const dbContext = require('../../database/dbContext');

module.exports = function (router) {
    const recipeTypeRepository = _recipeType(dbContext);
    router.route('/recipeTypes')
        .get(recipeTypeRepository.getAll);
    router.route('/recipeType')
        .post(recipeTypeRepository.post);
    router.route('/recipeType/:id')
        .delete(recipeTypeRepository.delete)
}