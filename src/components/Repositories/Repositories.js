import React from 'react';
import NotFound from '../NotFound';
import Repository from '../Repository';

const Repositories = ({ repositories }) => {
    let repository;
    
   
    if (repositories.length) { 
        repositories.sort(function(a,b){
            if (a.stargazers_count < b.stargazers_count) return 1
            else if (a.stargazers_count > b.stargazers_count) return -1
            return 0

        })

        repository = Object.keys(repositories).map(index => {
            return <Repository key={index} repository={repositories[index]} />;
        });
    } else {
        repository = <NotFound heading="No repositories" message="There are no repositories to display." />;
    }
    
    return (
        <div className="is-animated fadeInLeft">
            <header className="panel--header">
                <h2 className="repo-title">Popular Repositories</h2>
            </header>
            <ol>
                {repository}
            </ol>
        </div>
    );
};

export default Repositories;