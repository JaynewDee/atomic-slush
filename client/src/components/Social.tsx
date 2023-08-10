import { ImInstagram, ImFacebook } from "react-icons/im";

const Social = ({ menuState }: { menuState: boolean }) => {
  return (
    <div className="social-links" style={
              menuState
                ? { transform: "translateX(0px)" }
                : { transform: "translateX(225px)" }
            }>
      <a href="https://instagram.com/atomic_slush_dfw" aria-label="Link to external instagram page" target="_blank">
        <ImInstagram size="1rem" className="social-icon" data-state="active" />
      </a>
      <a href="https://www.facebook.com/atomicslush" aria-label="Link to external facebook page"target="_blank">
        <ImFacebook size="1rem" className="social-icon" data-state="active" />
      </a>
    </div>
  );
};

export default Social;
