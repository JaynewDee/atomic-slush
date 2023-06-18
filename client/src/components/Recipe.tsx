import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { RecipeType, recipes } from '../data/recipes'

export function loader({ params }: any) {
    return recipes[Number(params.recipeId) - 1]
}

const Recipe = () => {
    const recipe = useLoaderData() as RecipeType;

    return (
        <div className="recipe-card">
            <h4 className="recipe-name">{recipe.name}</h4>
            <ul className="ingredients-list">
                {recipe.ingredients.map(ingredient => <li key={ingredient.name}>{ingredient.name}</li>)}
            </ul>
        </div>
    )
}

export default Recipe