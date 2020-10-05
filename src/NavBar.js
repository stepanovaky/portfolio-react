import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <nav className="nav-bar">
            <ul className="nav-bar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="projectsindex">Projects</Link></li>
                <li><Link to="aboutme">About Me</Link></li>

            </ul>
        </nav>
    )
}

export default NavBar;