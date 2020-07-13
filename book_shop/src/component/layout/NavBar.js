import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'


const NavBar = () =>{
    return(
        <nav className="nav-wrapper purple z-depth-3 darken-4">
            <div className="container">
                <span className="brand-logo left">weCode</span>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/sign_in">Sign In</NavLink></li>
                    <li><NavLink to="/sign_up">Sign Up</NavLink></li>
                    <li><NavLink to="/category">Category</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(NavBar);