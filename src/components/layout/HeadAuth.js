import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return(
        <header style={headerStyle}>

            <Link style={linkStyle} to="/">Account</Link>|
            <Link style={linkStyle} to="/Login">Login</Link>|
            <Link style={linkStyle} to="/SignUp">Sign Up</Link>
        </header>
    )
}

const headerStyle = {
    
    background: '#079',
    color: '#fff',
    textAlign: 'right',
    height: "100px",
    
   
}

const headerStyle1 = {
    height: "50%",
    width:'100%',
    background: '#fff',
    color: '#079',
    textAlign: 'right',
   
   
  
}
const linkStyle = {
    
    padding:'0px 5px 0px 5px',
    color: '#fff',
    textDecolation: 'none',
}

export default Header; 