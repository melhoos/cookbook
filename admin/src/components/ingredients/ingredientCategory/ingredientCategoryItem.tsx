import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import IngredientCategory from '../../../models/ingredientCategory.model';

interface Props {
    ic: IngredientCategory
}

const IngredientCategoryItem = (props: Props) => {
    const {ic} = props;
    return ( 
        <span className="ingredient-category-item" key={ic.ID}>
            {ic.INGREDIENT_CATEGORY_NAME}
            <button className="remove-ingredient-category-item">
                <FontAwesomeIcon icon={faTimes}/>
            </button>
        </span>
    )
}

export default IngredientCategoryItem