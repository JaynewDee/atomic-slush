import { GiPineapple as Pineapple } from "react-icons/gi"
import "./menu.css";
import { PricingMenu } from "../components/PdfDisplay";

export function Menu() {
    return <article>
        <header className="menu-header">
            <Pineapple className="header-pineapple" />
            <h3>MENU</h3>
            <Pineapple className="header-pineapple" />
        </header>
        {PricingMenu}        
    </article>
}