import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to={"/"}>Home</Link>
      <Link to={"/recipes"}>Recipes</Link>
      <Link to={"/services"}>Services</Link>
      <Link to={"/about"}>Who We Are</Link>
      <Link to={"/quote"}>Get a Quote</Link>
    </div>

  );
}
