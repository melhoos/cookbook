var response = require('../shared/response');
var TYPES = require('tedious').TYPES;

function RecipeTypeRepository(dbContext) {

    function getRecipeTypes(req, res) {
        var query = "select * from [dbo].[COOKBOOK_RECIPE_TYPE] order by [RECIPE_TYPE_NAME] asc"
        dbContext.queryExecute(query, [], false, function (error, data) {
            return res.json(response(data, error));
        });
    }

    function postRecipeType(req, res) {
        var parameters = [];
        parameters.push({ name: 'RecipeTypeName', type: TYPES.VarChar, val: req.body.RecipeTypeName.toUpperCase() });
        var query = "insert into [dbo].[COOKBOOK_RECIPE_TYPE] ([RECIPE_TYPE_NAME]) values (@RecipeTypeName)"
        dbContext.post(query, parameters, function (error, data) {
            return res.json(response(data, error));
        })
    }

    function deleteRecipeType(req, res) {
        if (req.params.id) {
            var parameters = [];
            parameters.push({ name: 'Id', type: TYPES.VarChar, val: req.params.id });
            var query = "delete from [dbo].[COOKBOOK_RECIPE_TYPE] where Id = @Id"
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
            getAll: getRecipeTypes,
            post: postRecipeType,
            delete: deleteRecipeType
        }
    }
    
    module.exports = RecipeTypeRepository;