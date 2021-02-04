import React from 'react'
import '../../Styles/navbar.scss'

function Index() {
    return (
        <nav className={'nav-bar navbar-sticky'}>
            <ul class="nav-links">
                <li class="nav-item"><a href="#">Home</a></li>
                <li class="nav-item"><a href="#">Contact Us</a></li>
                <li class="nav-item"><a href="#">Help</a></li>
            </ul>
            <a href="http://wecode.best/" class="logo">
                <h3>weCode</h3>
            </a>
        </nav>
    )
}

export default Index
