import React from 'react';

const RecipesList = (props) => {
    return (
        <ul className = "results__list">
            {props.recipes.map((rec, i) => 
                <li key = { i }>
                    <a className="results__link results__link--active" href="#23456">
                        <figure className="results__fig">
                            <img src= {rec.recipe.image} alt= {rec.recipe.label} />
                        </figure>
                        <div className="results__data">
                            <h4 className="results__name">{rec.recipe.label}</h4>
                            <p className="results__author">{rec.recipe.source}</p>
                        </div>
                    </a>
                </li>    
            )}
        </ul> 
        
     );
}
 
export default RecipesList;