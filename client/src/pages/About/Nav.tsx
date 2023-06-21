import { Link } from 'react-router-dom'
import { Dispatch, SetStateAction } from 'react'
import { FaHandHoldingHeart as Heart, FaPeopleCarry as People } from 'react-icons/fa'
import { CgSmartHomeWashMachine as Machine } from "react-icons/cg"

type NavProps = {
    displayState: string,
    setDisplayState: Dispatch<SetStateAction<string>>;
}

const AboutNav = ({ displayState, setDisplayState }: NavProps) => {
    const sections = [{ name: "reason", text: "The Mission", icon: Heart }, { name: "people", text: "The People", icon: People }, { name: "machine", text: "The Machine", icon: Machine }]
    return (
        <nav className="about-nav">
            {sections.map(({ name, text, icon }) =>
                <Link
                    to={`about/${name}`} onClick={() => setDisplayState(name)}
                    key={name}
                >
                    {icon({ color: name === displayState ? "var(--orange)" : "var(--lightest)" })}
                    <span style={name === displayState ? { color: "var(--ocean)" } : {}}>{text}
                    </span>
                </Link>
            )}
        </nav>
    )
}

export default AboutNav;