import { useState } from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom'
import { RecipeType } from '../data/recipes';
import "../styles/recipes.css"
import { SectionHeader } from '../components/Section';
import Note from '../components/Note';

const RecipeNav = ({ active, setActive }: any) => {
  const recipes: RecipeType[] = useLoaderData() as RecipeType[];

  return (
    <nav className="recipe-nav">
      <ul className="recipe-nav-list">
        {recipes.map(recipe => {
          return (
            <li
              key={recipe.name}
              className="recipe-nav-item"
              style={active === recipe.name ? { color: '#33c2e4', borderLeft: "3px solid var(--orange)", paddingLeft: "1rem" } : {}}
            >
              <Link
                onClick={() => setActive(recipe.name)}
                to={`recipes/${recipe.id}`}>{recipe.name}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

const Recipes = () => {
  const [active, setActive] = useState("Classic Margarita")
  return (
    <>
      <SectionHeader />
      <article className="recipes-container">
        <RecipeNav active={active} setActive={setActive} />
        <Outlet />
      </article>
      <Note />
    </>
  )
}

export default Recipes