import { useViewportQuery } from "../hooks";
import "./pdf.css";

function PdfDisplay({ src }: {src: string}) {
  const [width, _] = useViewportQuery();
 
  return (
    <>
      {width > 768 ? 
      <article className="full-pdf-container">
        <embed
          className="pdf-embed"
          type="application/pdf"
          style={{ minHeight: "1200px", width: "100%", margin: "3rem auto" }}
          src={src}
        ></embed>
      </article>
        :
        <div className="mobile-pdf-options"> 
          { src === "./terms.pdf" && <h4 className="terms-header">Terms & Conditions</h4>}
          <a href={src} target="_blank" className="open-link">VIEW</a> 
          <a href={src} download="atomic_menu" target="_blank" className="download-link">DOWNLOAD</a> 
        </div>
    }
    </>
  );
}

export const PricingMenu = <PdfDisplay src="./menu.pdf" />;
export const TermsAndConditions = <PdfDisplay src="./terms.pdf" />;
