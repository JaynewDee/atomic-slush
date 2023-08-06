import { TermsAndConditions } from "../components/PdfDisplay";
import { GiPalmTree as PalmTree } from "react-icons/gi";

export function Services() {
  return (
    <div>
      <header className="page-header">
        <PalmTree className="header-palmtree" />
        <h3>DOCUMENTS</h3>
        <PalmTree className="header-palmtree" />
      </header>
      {TermsAndConditions}
    </div>
  );
}
