import "./quote.css";

const QuoteForm = () => {
  return (
    <div id="embedded-form-frame">
      <iframe src="embed.html" width="100%" height="100%"></iframe>
    </div>
  );
};

const Quote = () => {
  return (
    <>
      <QuoteForm />
    </>
  );
};

export default Quote;
