import { useLoaderData } from 'react-router-dom'
import { RecipeType, recipes } from '../../data/recipes'
import { GiPineapple } from 'react-icons/gi'

export function loader({ params }: any) {
    return recipes[Number(params.recipeId) - 1] || recipes[0]
}

const Recipe = () => {
    const recipe = useLoaderData() as RecipeType;

    return (
        <div className="recipe-card">
            <h4 className="recipe-name">
                {/* <span>{"("}</span> */}
                {recipe.name}
                {/* <span>{")"}</span> */}
            </h4>
            <ul className="ingredients-list">
                {recipe.ingredients.map(ingredient => <li key={ingredient.name}>{ingredient.name}</li>)}
            </ul>
        </div>
    )
}

export default Recipe