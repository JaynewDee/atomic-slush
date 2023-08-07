import { ImInstagram, ImFacebook } from "react-icons/im";

const Social = () => {
  return (
    <div className="social-links">
      <a href="https://instagram.com/atomic_slush_dfw" target="_blank">
        <ImInstagram size="1rem" className="social-icon" data-state="active"/>
      </a>
      <a href="/" style={{ cursor: "not-allowed" }}>
        <ImFacebook size="1rem" className="social-icon" data-state="inactive"/>
      </a>
    </div>
  );
};

export default Social;
