import React from 'react';
import NotFound from '../NotFound';
import Language from '../Language';

const Languages = ({ languages }) => {
    let language;
    

    
   
    if (languages) { 
    

        language = Object.keys(languages).map(index => {
            return <Language key={index} language={languages[index]} />;
        });
    } else {
        language = <NotFound heading="No languages" message="There are no languages to display." />;
    }
    
    return (
        <div className="is-animated fadeInLeft">
            <header className="panel--header">
                <h2 className="repo-title">Languages</h2>
            </header>
            <ol>
                {language}
            </ol>
        </div>
    );
};

export default Languages;