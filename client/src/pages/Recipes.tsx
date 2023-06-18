import { useState } from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom'
import { RecipeType } from '../data/recipes';
import "../styles/recipes.css"

const RecipeNav = ({ active, setActive }: any) => {
  const recipes: RecipeType[] = useLoaderData() as RecipeType[];

  return (
    <nav>
      <ul className="recipe-nav-list">
        {recipes.map(recipe => {
          return (
            <li
              key={recipe.name}
              className="recipe-nav-item"
              onClick={() => setActive(recipe.name)}
              style={active === recipe.name ? { color: 'orange' } : {}}
            >
              <Link to={`recipes/${recipe.id}`}>{recipe.name}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

const Header = () => {
  return (
    <header className="recipes-header">
      <h3>RECIPES</h3>
    </header>
  )
}

const Recipes = () => {
  const [active, setActive] = useState("")
  return (
    <>
      <Header />
      <article className="recipes-container">
        <RecipeNav active={active} setActive={setActive} />
        <Outlet />
      </article>
    </>
  )
}

export default Recipes