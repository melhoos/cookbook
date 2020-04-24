import React from 'react';
// import HomeWrapper from './home/homeWrapper';
import RecipesWrapper from './recipes/recipesWrapper';
import RecipePageWrapper from './recipe/recipePageWrapper';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import '../styles/content.scss';

function ContentWrapper() {
  return (
    <div className="content">
        <Router>
            <Switch>
                <Route path="/recipe/:id" component={RecipePageWrapper} />
                <Route path="/recipes" component={RecipesWrapper} />
                <Route path="/" component={RecipesWrapper} />
            </Switch>
        </Router>
    </div>
  );
}

export default ContentWrapper;
