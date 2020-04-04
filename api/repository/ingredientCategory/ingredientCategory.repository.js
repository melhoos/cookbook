var response = require('../shared/response');
var TYPES = require('tedious').TYPES;

function IngredientCategoryRepository(dbContext) {

    function getIngredientCategories(req, res) {
        var query = "select * from [dbo].[COOKBOOK_INGREDIENT_CATEGORY] order by [INGREDIENT_CATEGORY_NAME] asc"
        dbContext.queryExecute(query, [], false, function (error, data) {
            return res.json(response(data, error));
        });
    }

    function postIngredientCategory(req, res) {
        var parameters = [];
        parameters.push({ name: 'IngredientCategoryName', type: TYPES.VarChar, val: req.body.IngredientCategoryName.toUpperCase() });
        var query = "insert into [dbo].[COOKBOOK_INGREDIENT_CATEGORY] ([INGREDIENT_CATEGORY_NAME]) values (@IngredientCategoryName)"
        dbContext.post(query, parameters, function (error, data) {
            return res.json(response(data, error));
        })
    }

    function deleteIngredientCategory(req, res) {
        if (req.params.id) {
            var parameters = [];
            parameters.push({ name: 'Id', type: TYPES.VarChar, val: req.params.id });
            var query = "delete from [dbo].[COOKBOOK_INGREDIENT_CATEGORY] where Id = @Id"
            dbContext.queryExecute(query, parameters, false, function(error, data, rowCount) {
                if (rowCount > 0) {
                    return res.json({
                        status: 200,
                        message: 'Record is deleted'
                    })
                }
                return res.json({
                    status: 404,
                    message: 'Record not deleted'
                })
            })
        }
    } 

    return {
            getAll: getIngredientCategories,
            post: postIngredientCategory,
            delete: deleteIngredientCategory
        }
    }
    
    module.exports = IngredientCategoryRepository;