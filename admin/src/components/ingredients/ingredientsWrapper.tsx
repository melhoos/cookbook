import React from 'react';
import Ingredients from './ingredients';
import IngredientCategories from './ingredientCategory/ingredientCategories';
import '../../styles/ingredients.scss';

const IngredientsWrapper = () => {
    return ( 
        <div className="ingredients-wrapper">
            <IngredientCategories/>
            <Ingredients/>
        </div>
    )
}

export default IngredientsWrapper