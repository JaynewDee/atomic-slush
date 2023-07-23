import { ImInstagram, ImFacebook, ImTwitter } from 'react-icons/im'
import React from 'react'

const Social = () => {
    return (
        <div className="social-links">
            <a href="/"><ImInstagram size="1.66rem" className="social-icon" /></a>
            <a href="/"><ImFacebook size="1.66rem" className="social-icon" /></a>
            <a href="/"><ImTwitter size="1.86rem" className="social-icon" /></a>
        </div>
    )
}

export default Social
