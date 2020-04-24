import React from 'react';
import FullRecipe from '../../models/fullRecipe.model';


interface Props {
    fullRecipe : FullRecipe
}

const RecipeWrapper = (props: Props) => {
    const {fullRecipe} = props;
    
    return (
        <>
            <h1>{fullRecipe.RECIPE_NAME}</h1>
            <p>{fullRecipe.RECIPE_DESCRIPTION}</p>
        </>
    );
}

export default RecipeWrapper;