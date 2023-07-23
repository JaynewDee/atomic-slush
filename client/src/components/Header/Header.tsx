import { Link } from 'react-router-dom';
import { Dropdown } from '../Dropdown';
import Social from './Social'
import "./header.css";
import { NavProps } from '../Navbar';

const Header = ({ activeView, setActiveView }: NavProps) => {
    return (
        <section className="header-section">
            <div className="tip-top">
                <Link to={"/"}>ATOMIC</Link>

                <Dropdown activeView={activeView} setActiveView={setActiveView} />
            </div>
        </section>
    )
}

export default Header
