import React from 'react';

const Repository = ({ repository }) => {
    const {
        name,
        description,
        stargazers_count: stars,
        html_url: url,
        language,
        forks_count,
        created_at,
        updated_at,
        
    } = repository;
    
    const langType = language || <br/>;
    const des = description || 'No Description';
    const forkcount = forks_count || '0';

    const date = new Date(created_at);
    const dateArr = date
      .toString()
      .split(" ")
      .splice(3, 1);
    const update = new Date(updated_at);
    const updateArr = update
      .toString()
      .split(" ")
      .splice(3, 1);
   
    return (
        <li className="panel">
            <h2 className="panel--title">
               <a href={url} className="panel--link" target="_blank" rel="noopener noreferrer">{name}</a>
               <span className="floatRight">[{dateArr}]-[{updateArr}]</span> 
            </h2>
            <span className="panel--lang">
                   {langType}
            </span>

            <p className="panel--content">[{des}]</p>
            <div className="panel--meta meta">
                <span className="meta--item">
                This repository has {stars} stars and {forkcount} forks. If you would like more information about this repository and my contributed code, please visit <a href={url} target="_blank" rel="noopener noreferrer">{name}</a> on GitHub.
                </span>
            </div>
        </li>
    );
};

export default Repository;