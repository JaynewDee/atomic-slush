import Social from './Social'
import Strip from './Strip'
import "./header.css";

const Header = () => {
    return (
        <section className="header-section">
            <div className="tip-top">
                <p>ATOMIC</p>
                <Social />
            </div>
            <Strip />
        </section>
    )
}

export default Header