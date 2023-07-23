import { ImInstagram, ImFacebook, ImTwitter } from 'react-icons/im'

const Social = () => {
    return (
        <div className="social-links">
            <a href="/"><ImInstagram size="1.86rem" className="social-icon" /></a>
            <a href="/"><ImFacebook size="1.86rem" className="social-icon" /></a>
            <a href="/"><ImTwitter size="2rem" className="social-icon" /></a>
        </div>
    )
}

export default Social
