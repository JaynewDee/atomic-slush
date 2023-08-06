import { FaCocktail } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="page-header">
      <FaCocktail className="header-cocktail" />
      <h3 className="header-row">RECIPES</h3>
      <FaCocktail className="header-cocktail" />
    </header>
  );
};
