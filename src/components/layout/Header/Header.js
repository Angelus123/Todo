import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
function Header() {
    return(
        <header className="header-style">
            <h1>Tasks To Do </h1>
            <NavLink className="link-style" to="/">Home</NavLink>|
            <NavLink className="link-style" to="/about">About</NavLink>
        </header>
    )
}

export default Header; 