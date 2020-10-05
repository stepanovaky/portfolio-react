import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer>
            <address>
                <ul className="footer">
                    <li><a href="mailto:stepanovaky@gmail.com">Send email</a></li>
                    <li><a rel="noopener noreferrer" href="https://github.com/stepanovaky" target="_blank">Github Repository</a></li>
                    <li><a rel="noopener noreferrer" href="https://www.linkedin.com/in/kat-s-044582185/" target="_blank">LinkedIn Profile</a></li>
                </ul>
            </address>
        </footer>
    )

}

export default Footer;