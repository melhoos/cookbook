var response = require('../shared/response');
var TYPES = require('tedious').TYPES;

function FullRecipeRepository(dbContext) {

    // Todo: Refactor this:
    function getFullRecipe(req, res) {
        if (req.params.id) {
            var parameters = [];
            parameters.push({ name: 'Id', type: TYPES.VarChar, val: req.params.id });
            var queryIngredient = "select * from [dbo].[COOKBOOK_RECIPE_INGREDIENT] inner join [dbo].[COOKBOOK_INGREDIENT] on [dbo].[COOKBOOK_RECIPE_INGREDIENT].[INGREDIENT_ID] = [dbo].[COOKBOOK_INGREDIENT].[ID] where [RECIPE_ID] = @Id";
            var queryRecipe = "select * from [dbo].[COOKBOOK_RECIPE] where [ID] = @Id";
            var queryStep = "select * from [dbo].[COOKBOOK_RECIPE_STEP] where [RECIPE_ID] = @Id order by [STEP_ORDER]"
            dbContext.queryExecute(queryRecipe, parameters, false, function (error, recipes) {
                dbContext.queryExecute(queryIngredient, parameters, false, function (error, ingredients) {
                    dbContext.queryExecute(queryStep, parameters, false, function (error, steps) {
                        var singleRecipe = recipes.length === 1 ? recipes[0] : recipes;
                        var result = {...singleRecipe, INGREDIENTS: ingredients, STEPS: steps }
                        return res.json(response(result, error));
                    })
                });
            });
        }
    }

    return {
            getFull: getFullRecipe
        }
    }
    
module.exports = FullRecipeRepository;