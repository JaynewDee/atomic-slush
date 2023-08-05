import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { recipes, RecipeType } from './data/recipes.ts';
import { About, Quote, Home, Menu, Services } from './pages';

import { RecipesGrid } from "./pages/Recipes/RecipesGrid.tsx"

const recipesLoader = (): RecipeType[] => recipes;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/recipes",
        element: <RecipesGrid />,
        loader: recipesLoader,
      },
      {
        path: "/quote",
        element: <Quote />
      },
      {
        path: "/menu",
        element: <Menu />
      },
      {
        path: "/important",
        element: <Services />
      }
    ]
  },
])



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
