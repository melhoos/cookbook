import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import IngredientCategory from '../../../models/ingredientCategory.model';
import {deleteIngredientCategorie} from './ingredientCategoryService';
import {ConnectionStatus} from '../../../utility/dataService';

interface Props {
    ic: IngredientCategory
}

const onRemove = (ic: IngredientCategory) => {
    const response = window.confirm(`Er du sikker på at du vil slette ${ic.INGREDIENT_CATEGORY_NAME}?`);
    if (response) {
        deleteIngredientCategorie(ic.ID).then((response) => {
            if (response.status === ConnectionStatus.SUCCESS) window.location.reload();
        })
    } 
}

const IngredientCategoryItem = (props: Props) => {
    const {ic} = props;
    return ( 
        <span className="ingredient-category-item" key={ic.ID}>
            {ic.INGREDIENT_CATEGORY_NAME}
            <button className="remove-ingredient-category-item" onClick={() => onRemove(ic)}>
                <FontAwesomeIcon icon={faTimes}/>
            </button>
        </span>
    )
}

export default IngredientCategoryItem