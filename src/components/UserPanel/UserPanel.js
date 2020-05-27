import React from 'react';


const UserPanel = ({ user }) => {
    const {
        html_url: githubProfile,
        login,
        location,
        created_at,
        followers,
        public_repos,
        following
    } = user;

   
    const date = new Date(created_at);
    const dateArr = date
      .toString()
      .split(" ")
      .splice(3, 1);

    return (

     
        <div className="user is-animated fadeInLeft">
            <h3 className="result-title">[{login}]</h3>
            <span className="result-subtitle">A passionate Github user</span>

            <span className="result-title">
                <a href={githubProfile}  target="_blank" rel="noopener noreferrer">
                    {githubProfile}
                </a>
            </span>
            <span className="since">
              On GitHub since {dateArr}, {login} is a developer based in{" "}
              {location} with{" "}
              <span className="pink">{public_repos} public repositories </span>and{" "}
              <span className="pink">{followers} followers</span>{" "}and{" "}
              <span className="pink">{following} following</span>.
            </span>

        </div>
    );
};



export default UserPanel;