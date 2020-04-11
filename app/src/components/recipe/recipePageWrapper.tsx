import React, {useEffect, useState} from 'react';
import Recipe from '../../models/recipe.model';
import {RouteComponentProps} from "react-router-dom";
import {getRecipeById} from './recipeService';
import {Service, ConnectionStatus} from '../../utilities/dataService';
import OnError from '../shared/onError';
import {iconSize} from '../../utilities/iconSize';
import Spinner from '../shared/spinner';
import BackBtn from '../shared/backBtn';

const onError = () => {
    return (<OnError iconSize={iconSize.lg}/>) 
}

const onLoading = () => {
    return ( <Spinner iconSize={iconSize.lg}/> )
}

const onSuccess = (recipe: Recipe) => {
    // todo: support of not found 
    return (
        <>
            <h1>{recipe.RECIPE_NAME}</h1>
        </>
    )
}

interface Props extends RouteComponentProps<{
    id: string
}> {}

const RecipePageWrapper = (props: Props) => {
    const [recipe, setRecipe] = useState<Service<Recipe>>({status: ConnectionStatus.LOADING})
    const recipeId = props.match.params.id;
    
    useEffect(() => {
        getRecipeById(recipeId).then((resp)=> setRecipe(resp));
    },[recipeId])

    return (
        <>
            <BackBtn url="/recipes" name="Oppskrifter"/>
            { recipe.status === ConnectionStatus.LOADING && onLoading()}
            { recipe.status === ConnectionStatus.ERROR && onError()}
            { recipe.status === ConnectionStatus.SUCCESS && onSuccess(recipe.payload)}
        </>
    );
}

export default RecipePageWrapper;
