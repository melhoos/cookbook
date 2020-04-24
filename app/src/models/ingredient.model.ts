interface Ingredient {
    ID: number,
    RECIPE_ID: number,
    INGREDIENT_ID: number,
    MEASUREMENT_TYPE_ID: string,
    MEASUREMENT_VALUE: number,
    INGREDIENT_NAME_SINGLE: string,
    INGREDIENT_NAME_PLURAL: string,
    INGREDIENT_CATEGORY_ID: number
}

export default Ingredient;