import "./pdf.css";

function PdfDisplay(src: string) {
  return (
    <article className="full-pdf-container">
      <embed
        className="pdf-embed"
        type="application/pdf"
        style={{ minHeight: "1080px", minWidth: "100%", margin: "3rem auto" }}
        src={src}
      ></embed>
    </article>
  );
}

export const PricingMenu = PdfDisplay("./menu.pdf");
export const TermsAndConditions = PdfDisplay("./terms.pdf");
