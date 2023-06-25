import Disclaimer from './Disclaimer';
import Social from './Social';
import "./footer.css";

const Footer = () => {
    return (
        <div className="main-footer">
            <Social />
            <Disclaimer />
        </div>
    )
}

export default Footer