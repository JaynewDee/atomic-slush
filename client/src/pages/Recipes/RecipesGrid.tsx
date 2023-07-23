import { useLoaderData } from "react-router-dom";
import { RecipeType } from "../../data/recipes";
import "./recipes.css";
import { Header } from "./Header";

export function RecipesGrid() {
    const recipes: RecipeType[] = useLoaderData() as RecipeType[];

    return (
        <>
            <Header />
            <div id="recipes-grid">
                {
                    recipes.map(r => <><div key={r.id}>{r.name}</div></>)
                }
            </div>
        </>
    )
}