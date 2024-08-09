import "./quote.css";

const LeadForm = () => {
  return (
    <div id="embedded-form-frame">
      <iframe src="https://atomicslush.hbportal.co/public/66b3d3b5c0a3b700191b57fc/1-Inquiry_form" width="100%" height="1800px"></iframe>
    </div>
  );
};

const Quote = () => {
  return (
    <>
      <header className="page-header" style={{ marginBottom: "3rem" }}>
        <h4>About Your Event</h4>
      </header>
      <LeadForm />
    </>
  );
};

export default Quote;
