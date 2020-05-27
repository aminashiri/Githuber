import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faHeart } from '@fortawesome/free-solid-svg-icons';
import Loading from '../Loading/';
const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <p className="footer--copyright">
            <span>
            Made with <FontAwesomeIcon icon={faHeart} className="footer-icon-heart" /> 
 by <a  href="https://github.com/aminashiri"  rel="noopener noreferrer" target="_blank">Amin Ashiri</a><FontAwesomeIcon icon={faArrowRight} className="footer-icon-right" /> <a mailto="ashirict@gmail.com" className="copyright pink"  rel="noopener noreferrer" target="_blank">Buy me a coffee</a>
            </span>         
            </p> 
            
        </footer>
    );
};

export default Footer;