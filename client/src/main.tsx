import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { recipes, RecipeType } from './data/recipes.ts';
import { About, Services, Recipes, Quote } from './pages';
import Recipe from './components/Recipe.tsx';
import { loader as recipeLoader } from './components/Recipe'

function recipesLoader(): RecipeType[] {
  return recipes
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/recipes",
        element: <Recipes />,
        loader: recipesLoader,
        children: [
          {
            path: "recipes/:recipeId",
            element: <Recipe />,
            loader: recipeLoader
          }
        ]
      },
      {
        path: "/quote",
        element: <Quote />
      }
    ]
  },
])



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
