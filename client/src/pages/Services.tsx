import { TermsAndConditions } from "../components/PdfDisplay";
import { GiPineapple as Pineapple } from "react-icons/gi"

export function Services() {
    return <div>
        <header className="menu-header">
            <Pineapple className="header-pineapple" />
            <h3>DOCUMENTS</h3>
            <Pineapple className="header-pineapple" />
        </header>
        {TermsAndConditions}
    </div>
}