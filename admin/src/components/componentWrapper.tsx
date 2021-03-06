import React, {useContext} from 'react';
import {PageContext, Pages} from '../providers/pageProvider';
import IngredientsWrapper from './ingredients/ingredientsWrapper';
import '../styles/content.scss';

const renderContent = (pageName: Pages) => {
    switch(pageName) {
        case Pages.HOME:
            return (<></>)
        case Pages.INGREDIENT:
            return (<IngredientsWrapper/>)
        default:
            return (<></>)
    }
} 

const ContentWrapper = () => {
    const [pageName] = useContext(PageContext)
    return ( 
        <div className="content">
            {renderContent(pageName)}
        </div>
    )
}

export default ContentWrapper