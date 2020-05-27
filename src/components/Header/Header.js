import React from 'react';
import Form from '../Form';

const Header = () => {
    return (
        <header className="header header">
        <nav className="header--nav">
            <a target="_blank" rel="noopener noreferrer"  href="https://linkedin.com/in/aminashiri/" title="Githuber Best 2020 Github Resume Maker">
                 <img className="logo" src="../img/logo.png" alt="Githuber Best Resume Maker"/>
            </a>
        </nav>
            <h1 className="header--title">Git Resum&#233; Hub</h1>
            
            <div className="box">
            <h2 className="form-title">Github username</h2>
                <div className="boxform">
                      <Form />
                </div>
            </div>
           
        </header>
    );
};

export default Header;