import React, {useEffect, useState} from 'react';
import Spinner from 'react-bootstrap/Spinner';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {getIngredientCategories} from './ingredientCategoryService';
import IngredientCategoryItem from './ingredientCategoryItem';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Service, ConnectionStatus} from '../../../utility/dataService';
import IngredientCategory from '../../../models/ingredientCategory.model';
import IngredientCategoryForm from './ingredientCategoryForm';

const onSuccess = (iCategories: IngredientCategory[]) =>  {
    return (
        <>
            {iCategories.map((ic: IngredientCategory) => {
                return <IngredientCategoryItem ic={ic} key={ic.ID}/>
            })}
            <IngredientCategoryForm/>
        </>
    )
} 

const onError = () => {
    return (<div className="error"><FontAwesomeIcon icon={faTimes}/> Error</div>)
}

const onLoading = () => {
    return (<Spinner animation="grow" /> )
}

const IngredientCategories = () => {
    const [categories, setCategories] = useState<Service<IngredientCategory[]>>({status: ConnectionStatus.LOADING})

    useEffect(() => {
        getIngredientCategories()
            .then(iCategories => setCategories(iCategories))
    }, [])

    return ( 
        <div className="ingredient-category-wrapper">
            <div className="ingredient-category-title">Ingrediens kategorier:</div>
            { categories.status === ConnectionStatus.LOADING && onLoading()}
            { categories.status === ConnectionStatus.ERROR && onError()}
            { categories.status === ConnectionStatus.SUCCESS && onSuccess(categories.payload)}
        </div>
    )
}

export default IngredientCategories