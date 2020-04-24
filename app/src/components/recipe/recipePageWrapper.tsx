import React, {useState, useEffect} from 'react';
import BackBtn from '../shared/backBtn';
import Spinner from '../shared/spinner';
import OnError from '../shared/onError';
import StepsWrapper from './stepsWrapper';
import RecipeWrapper from './recipeWrapper';
import {getFullRecipeById} from './recipeService';
import {iconSize} from '../../utilities/iconSize';
import {RouteComponentProps} from "react-router-dom";
import IngredientsWrapper from './ingredientsWrapper';
import FullRecipe from '../../models/fullRecipe.model';
import {Service, ConnectionStatus} from '../../utilities/dataService';
import '../../styles/recipe.scss';

const onError = () => {
    return (<OnError iconSize={iconSize.lg}/>) 
}

const onLoading = () => {
    return ( <Spinner iconSize={iconSize.lg}/> )
}

const onSuccess = (fullRecipe: FullRecipe) => {
    return (
        <>
            <RecipeWrapper fullRecipe={fullRecipe}/>
            <div className="ingredient-step-wrapper">
                <IngredientsWrapper ingredients={fullRecipe.INGREDIENTS}/>
                <StepsWrapper steps={fullRecipe.STEPS}/>
            </div>
        </>
    )
}

interface Props extends RouteComponentProps<{
    id: string
}> {}

const RecipePageWrapper = (props: Props) => {
    const [fullRecipe, setFullRecipe] = useState<Service<FullRecipe>>({status: ConnectionStatus.LOADING})
    const recipeId = parseInt(props.match.params.id);

    useEffect(() => {
        getFullRecipeById(recipeId).then((resp)=>setFullRecipe(resp))
    },[recipeId])

    return (
        <div className="recipe">
            <BackBtn url="/recipes" name="Oppskrifter"/>
            {fullRecipe.status === ConnectionStatus.LOADING && onLoading()}
            {fullRecipe.status === ConnectionStatus.ERROR && onError()}
            {fullRecipe.status === ConnectionStatus.SUCCESS && onSuccess(fullRecipe.payload)}
        </div>
    );
}

export default RecipePageWrapper;