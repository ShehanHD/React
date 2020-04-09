import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'


const NavBar = () =>{
    return(
        <nav className="nav-wrapper purple z-depth-3 darken-4">
            <div className="container">
                <span className="brand-logo left">weCode</span>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/posts">Posts</NavLink></li>
                    <li><NavLink to="/todo">Todo List</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(NavBar);