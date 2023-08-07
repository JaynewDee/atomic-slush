import { useLoaderData } from "react-router-dom";
import { RecipeType } from "../../data/recipes";
import "./recipes.css";
import { Header } from "./Header";
import { useState } from "react";

export function RecipesGrid() {
  const recipes: RecipeType[] = useLoaderData() as RecipeType[];

  return (
    <>
      <Header />
      <div id="recipes-grid">
        {recipes.map((r) => (
          <Recipe data={r} key={r.id} />
        ))}
      </div>
    </>
  );
}

interface RecipeProps {
  data: RecipeType;
}

function Recipe({ data }: RecipeProps) {
  const [isDisplayed, setIsDisplayed] = useState(false);

  const toggleDisplay = () => setIsDisplayed((prev) => !prev);

  return (
    <div onClick={toggleDisplay} className="recipe-cell">
      <div
        style={
          isDisplayed
            ? { transform: "translateY(-250px)" }
            : { transform: "translateY(0px)" }
        }
        className="recipe-name"
      >
        {data.name}
      </div>
      <div
        style={
          isDisplayed
            ? { transform: "translateY(-250px)" }
            : { transform: "translateY(0px)" }
        }
        className="recipe-ingredients"
      >
        {" "}
        {data.ingredients.map(({ name }, idx) => (
          <p key={name + idx}>{name}</p>
        ))}
      </div>
    </div>
  );
}
