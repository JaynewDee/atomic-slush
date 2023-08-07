import { FaCocktail } from "react-icons/fa";

export const Header = () => {
  return (
    <>
      <header className="page-header">
        <FaCocktail className="header-cocktail" />
        <h3 className="header-row">RECIPES</h3>
        <FaCocktail className="header-cocktail" />
      </header>
      <div className="recipes-subheader">
        <h4>Straightforward, honest ingredients.</h4>
        <h4>No surprises.</h4>

        <h6>Click or tap for ingredients</h6>
      </div>
    </>
  );
};
