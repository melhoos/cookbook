import React from 'react';
import Recipe from '../../models/recipe.model';
import {iconSize} from '../../utilities/iconSize';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
// import {faClock} from '@fortawesome/free-regular-svg-icons'

interface Props {
    recipe: Recipe
}

const RecipeItem = (props: Props) => {
    const {recipe} = props;
    return (
        <a className="recipe-item-wrapper" href={`/recipe/${recipe.ID}`}>
            <div>
                <h3>{recipe.RECIPE_NAME}</h3>
                <p className="recipe-item-desc">{recipe.RECIPE_DESCRIPTION}</p>
            </div>
            <div className="recipe-item-chevron">
                <FontAwesomeIcon icon={faChevronRight} size={iconSize.sm}/>
            </div>
        </a>
    );
}

export default RecipeItem;
