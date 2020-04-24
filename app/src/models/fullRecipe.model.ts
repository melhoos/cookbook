import Ingredient from './ingredient.model';
import Step from './step.model';

interface FullRecipe {
    ID: number,
    RECIPE_NAME: string,
    RECIPE_DESCRIPTION: string,
    RECIPE_TYPE_ID: number,
    DEFAULT_PORTIONS: number,
    TIME_IN_MINUTTES: number,
    CREATED_AT: Date
    INGREDIENTS: Ingredient[],
    STEPS: Step[]
}

export default FullRecipe