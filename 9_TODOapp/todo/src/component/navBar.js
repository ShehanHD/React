import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const NavBar = () =>{
    return(
        <nav className="nav-wrapper purple  darken-4">
            <div className="container">
                <a className="brand-logo left">weCode</a>
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;