import "./quote.css";
import { GiPalmTree as PalmTree } from "react-icons/gi";

const LeadForm = () => {
  return (
    <div id="embedded-form-frame">
      <iframe src="embed.html" width="100%" height="100%"></iframe>
    </div>
  );
};

const Quote = () => {
  return (
    <>
      <header className="page-header" style={{marginBottom: "3rem"}}>
        <h4>About Your Event</h4>
      </header>
      <LeadForm />
    </>
  );
};

export default Quote;
