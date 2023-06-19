import { FaCocktail } from 'react-icons/fa'

export const SectionHeader = () => {
    return (
        <header className="section-header">
            <FaCocktail className="header-icon-left" /><h3 className="header-row">RECIPES</h3><FaCocktail className="header-icon-right" />
        </header>
    )
}
