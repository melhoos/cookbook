import React from 'react';
import Ingredient from '../../models/ingredient.model';

interface Props {
    ingredients : Ingredient[]
}

function getIngredientName (ing: Ingredient) : string {
    const name = ing.MEASUREMENT_VALUE > 1 ? ing.INGREDIENT_NAME_PLURAL : ing.INGREDIENT_NAME_SINGLE;
    return name.charAt(0).toUpperCase() + name.toLowerCase().slice(1)
}

const ingredientItem = (ing: Ingredient, i: number) => {
    return (
        <li key={i} className="ingredient-item"> 
            <span className="ingredient-measurement">{`${ing.MEASUREMENT_VALUE} ${ing.MEASUREMENT_TYPE_ID}`}</span>
            <span>{` ${getIngredientName(ing)}`}</span>
        </li>
    )
}

const IngredientsWrapper = (props: Props) => {
    const {ingredients} = props;
    
    return (
        <ol className="ingredient-list">
            {ingredients.map((ing:Ingredient, i: number) => ingredientItem(ing, i)) }
        </ol>
    );
}

export default IngredientsWrapper;
