var response = require('../shared/response');
var TYPES = require('tedious').TYPES;

function IngredientRepository(dbContext) {

    function getIngredients(req, res) {
        var query = "select * from [dbo].[COOKBOOK_INGREDIENT] order by [INGREDIENT_NAME_SINGLE] asc"
        dbContext.queryExecute(query, [], false, function (error, data) {
            return res.json(response(data, error));
        });
    }

    function getIngredientsByCategoryId(req, res) {
        if (req.params.id) { 
            var parameters = [];
            parameters.push({ name: 'Id', type: TYPES.VarChar, val: req.params.id });
            var query = "select * from [dbo].[COOKBOOK_INGREDIENT] where [INGREDIENT_CATEGORY_ID] = @Id order by [INGREDIENT_NAME_SINGLE] asc"
            dbContext.queryExecute(query, parameters, false, function (error, data) {
                return res.json(response(data, error));
            });
        }
    }

    function getIngredientById(req, res) {
        if (req.params.id) { 
            var parameters = [];
            parameters.push({ name: 'Id', type: TYPES.VarChar, val: req.params.id });
            var query = "select * from [dbo].[COOKBOOK_INGREDIENT] where [ID] = @Id"
            dbContext.queryExecute(query, parameters, false, function (error, data) {
                return res.json(response(data, error));
            });
        }
    }

    function getIngredientsByRecipeId(req, res) {
        if (req.params.id) {
            var parameters = [];
            parameters.push({ name: 'Id', type: TYPES.VarChar, val: req.params.id });
            var query = "select * from [dbo].[COOKBOOK_RECIPE_INGREDIENT] inner join [dbo].[COOKBOOK_INGREDIENT] on [dbo].[COOKBOOK_RECIPE_INGREDIENT].[INGREDIENT_ID] = [dbo].[COOKBOOK_INGREDIENT].[ID] where [RECIPE_ID] = @Id"
            dbContext.queryExecute(query, parameters, false, function (error, data) {
                return res.json(response(data, error));
            });
        }
    }

    function postIngredient(req, res) {
        var parameters = [];
        parameters.push({ name: 'IngredientNameSingle', type: TYPES.VarChar, val: req.body.IngredientNameSingle.toUpperCase() });
        parameters.push({ name: 'IngredientNamePlural', type: TYPES.VarChar, val: req.body.IngredientNamePlural.toUpperCase() });
        parameters.push({ name: 'IngredientCategoryId', type: TYPES.Int, val: req.body.IngredientCategoryId });
        var query = "insert into [dbo].[COOKBOOK_INGREDIENT] ([INGREDIENT_NAME_SINGLE], [INGREDIENT_NAME_PLURAL], [INGREDIENT_CATEGORY_ID]) values (@IngredientNameSingle, @IngredientNamePlural, @IngredientCategoryId)"
        dbContext.post(query, parameters, function (error, data) {
            return res.json(response(data, error));
        })
    }

    function deleteIngredient(req, res) {
        if (req.params.id) {
            var parameters = [];
            parameters.push({ name: 'Id', type: TYPES.VarChar, val: req.params.id });
            var query = "delete from [dbo].[COOKBOOK_INGREDIENT] where Id = @Id"
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
            getAll: getIngredients,
            getAllByCategoryId: getIngredientsByCategoryId,
            getById: getIngredientById,
            getAllByRecipeId: getIngredientsByRecipeId,
            post: postIngredient,
            delete: deleteIngredient
        }
    }
    
    module.exports = IngredientRepository;