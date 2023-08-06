import { ImInstagram, ImFacebook, ImTwitter } from "react-icons/im";

const Social = () => {
  return (
    <div className="social-links">
      <a href="/">
        <ImInstagram size="1rem" className="social-icon" />
      </a>
      <a href="/" style={{cursor: "not-allowed"}}>
       <ImFacebook size="1rem" className="social-icon" />
      </a>
      {/* <a href="/">
        <ImTwitter size="1.2rem" className="social-icon" />
      </a> */}
    </div>
  );
};

export default Social;
