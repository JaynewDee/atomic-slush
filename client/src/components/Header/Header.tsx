import { Link } from 'react-router-dom';
import { Dropdown } from '../Dropdown';
import Social from './Social'
import "./header.css";

const Header = () => {
    return (
        <section className="header-section">
            <div className="tip-top">
                <Link to={"/"}>ATOMIC</Link>

            <Dropdown />
            </div>
        </section>
    )
}

export default Header
