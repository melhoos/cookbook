import React, {useEffect, useState} from 'react';
import OnError from '../shared/onError';
import Spinner from '../shared/spinner';
import {getRecipes} from './recipesService';
import Recipe from '../../models/recipe.model';
import OnNoneFound from '../shared/onNoneFound';
import RecipeItem from './recipeItem';
import {iconSize} from '../../utilities/iconSize';
import {Service, ConnectionStatus} from '../../utilities/dataService';

const onError = () => {
  return (<OnError iconSize={iconSize.lg}/>) 
}

const onLoading = () => {
  return ( <Spinner iconSize={iconSize.lg}/> )
}

const onNonFound = () => {
  return ( <OnNoneFound iconSize={iconSize.md}/>)
}

const onSuccess = (recipes: Recipe[]) => {
  if (recipes.length > 0) {
    return recipes.map((r: Recipe, i: number) => <RecipeItem recipe={r} key={i}/>)
  } else {
    return onNonFound();
  }
}

const RecipesList = () => {
  const [recipes, setRecipes] = useState<Service<Recipe[]>>({status: ConnectionStatus.LOADING})

  useEffect(() => {
    getRecipes().then((resp) => setRecipes(resp))
  },[])
 
  return (
    <div className="recipes">
        <h1 className="recipes-title">Oppskrifter:</h1>
        { recipes.status === ConnectionStatus.LOADING && onLoading()}
        { recipes.status === ConnectionStatus.ERROR && onError()}
        { recipes.status === ConnectionStatus.SUCCESS && onSuccess(recipes.payload)}
    </div>
  );
}

export default RecipesList;
