import { ImInstagram, ImFacebook } from 'react-icons/im'

import React from 'react'

const Social = () => {
    return (
        <div className="social-links">
            <a href="/"><ImInstagram size="2rem" /></a>
            <a href="/"><ImFacebook size="2rem" /></a>
        </div>
    )
}

export default Social