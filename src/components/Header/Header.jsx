import React from 'react'

// Import Style
import "./header.scss"
import PhucLogo from '../PhucLogo/PhucLogo';
import HeaderIcons from '../HeaderIcons/HeaderIcons';


const Header = () => {
    return (
        <nav className="header">
            <PhucLogo />
            <HeaderIcons />
        </nav>
    )
}

export default Header
