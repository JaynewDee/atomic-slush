import { ImInstagram, ImFacebook } from "react-icons/im";

const Social = () => {
  return (
    <div className="social-links">
      <a href="/">
        <ImInstagram size="1rem" className="social-icon" />
      </a>
      <a href="/" style={{cursor: "not-allowed"}}>
       <ImFacebook size="1rem" className="social-icon" />
      </a>
    </div>
  );
};

export default Social;
