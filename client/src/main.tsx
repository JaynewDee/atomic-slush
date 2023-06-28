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
import Recipe from './pages/Recipes/Recipe.tsx';
import { loader as recipeLoader } from './pages/Recipes/Recipe.tsx'
import Reason from './pages/About/Reason.tsx';
import People from "./pages/About/People.tsx";
import Machine from './pages/About/Machine.tsx';

const recipesLoader = (): RecipeType[] => recipes;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "about/reason",
            element: <Reason />
          },
          {
            path: "about/people",
            element: <People />
          },
          {
            path: "about/machine",
            element: <Machine />
          }
        ]
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
