var response = require('../shared/response');
var TYPES = require('tedious').TYPES;

function RecipeRepository(dbContext) {

    function getRecipes(req, res) {
        var query = "select * from [dbo].[COOKBOOK_RECIPE] order by [CREATED_AT] asc"
        dbContext.queryExecute(query, [], false, function (error, data) {
            return res.json(response(data, error));
        });
    }
    
    function getRecipesByRecipeTypeId(req, res) {
        if (req.params.id) { 
            var parameters = [];
            parameters.push({ name: 'Id', type: TYPES.VarChar, val: req.params.id });
            var query = "select * from [dbo].[COOKBOOK_RECIPE] where [RECIPE_TYPE_ID] = @Id"
            dbContext.queryExecute(query, parameters, false, function (error, data) {
                return res.json(response(data, error));
            });
        }
    }

    function postRecipe(req,res) {
        var parameters = [];
        parameters.push({ name: 'RecipeName', type: TYPES.VarChar, val: req.body.RecipeName });
        parameters.push({ name: 'RecipeDescription', type: TYPES.VarChar, val: req.body.RecipeDescription });
        parameters.push({ name: 'RecipeTypeId', type: TYPES.Int, val: req.body.RecipeTypeId });
        parameters.push({ name: 'RecipeDefaultPortions', type: TYPES.Int, val: req.body.RecipeDefaultPortions });
        var query = "insert into [dbo].[COOKBOOK_RECIPE] ([RECIPE_NAME], [RECIPE_DESCRIPTION], [RECIPE_TYPE_ID], [DEFAULT_PORTIONS]) values (@RecipeName, @RecipeDescription, @RecipeTypeId, @RecipeDefaultPortions)"
        dbContext.post(query, parameters, function (error, data) {
            return res.json(response(data, error));
        })
    }

    function putRecipe(req,res) {
        if (req.params.id) { 
            var parameters = [];
            parameters.push({ name: 'Id', type: TYPES.VarChar, val: req.params.id });
            parameters.push({ name: 'RecipeName', type: TYPES.VarChar, val: req.body.RecipeName });
            parameters.push({ name: 'RecipeDescription', type: TYPES.VarChar, val: req.body.RecipeDescription });
            parameters.push({ name: 'RecipeTypeId', type: TYPES.Int, val: req.body.RecipeTypeId });
            parameters.push({ name: 'RecipeDefaultPortions', type: TYPES.Int, val: req.body.RecipeDefaultPortions });
            var query = "update [dbo].[COOKBOOK_RECIPE] set ([RECIPE_NAME] = @RecipeName, [RECIPE_DESCRIPTION] = @RecipeDescription, [RECIPE_TYPE_ID] = @RecipeTypeId, [DEFAULT_PORTIONS] = @RecipeDefaultPortions) where [ID] = @Id"
            dbContext.queryExecute(query, parameters, false, function(error, data, rowCount) {
                if (rowCount > 0) {
                    return res.json({
                        status: 200,
                        message: 'Record is updated'
                    })
                }
                return res.json({
                    status: 404,
                    message: 'Record not updated'
                })
            })
        }
    }

    function deleteRecipe(req,res) {
        if (req.params.id) { 
            var parameters = [];
            parameters.push({ name: 'Id', type: TYPES.VarChar, val: req.params.id });
            var query = "delete from [dbo].[COOKBOOK_RECIPE] where Id = @Id"
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
            getAll: getRecipes,
            getAllByRecipeTypeId: getRecipesByRecipeTypeId,
            post: postRecipe,
            put: putRecipe,
            delete: deleteRecipe
        }
    }
    
    module.exports = RecipeRepository;