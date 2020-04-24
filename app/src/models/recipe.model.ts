interface Recipe {
    ID: number,
    RECIPE_NAME: string,
    RECIPE_DESCRIPTION: string,
    RECIPE_TYPE_ID: number,
    DEFAULT_PORTIONS: number,
    TIME_IN_MINUTTES: number,
    CREATED_AT: Date
}

export default Recipe