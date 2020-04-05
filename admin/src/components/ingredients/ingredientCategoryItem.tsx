import React from 'react';
import IngredientCategory from '../../models/ingredientCategory.model';

interface Props {
    ic: IngredientCategory
}

const IngredientCategoryItem = (props: Props) => {
    const {ic} = props;
    return ( 
        <span className="ingredient-category-item" key={ic.ID}>
            {ic.INGREDIENT_CATEGORY_NAME}
        </span>
    )
}

export default IngredientCategoryItem