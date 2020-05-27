import React, { Component } from 'react';
import UserPanel from '../UserPanel';
import Repositories from '../Repositories';
import Languages from '../Languages';
import Loading from '../Loading';
import NotFound from '../NotFound';
import config from '../../config';

class User extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.login = this.props.match.params.username;
    }
    
    // Call Github API
    getUserData() {
        Promise.all([
            
          fetch(`${config.githubAPI}/users/${this.login}`),
          fetch(`${config.githubAPI}/users/${this.login}/repos`)
         
        ])
            .then(([res1, res2]) => Promise.all([res1.json(), res2.json()])
            .then(([userData, userRepoData]) => this.setState({
                user: userData, 
                repositories: userRepoData
               
            })));
          

            
    }


    componentDidMount() {
        this.getUserData();
    }

    componentDidUpdate(prevProps) {
        this.login = this.props.match.params.username;

        if (prevProps.match.params.username !== this.login) {
            this.getUserData();
        }
    }

    render() {
        let content,lang;

        if (!this.state.user) {
            return (
                <Loading />
            );
        }

        // If user not exist, return error
        if (this.state.user.message === 'Not Found') {
            return (
                <NotFound heading="Nothing Found" message="Given Github username not exist. Try again." />
            );
        }
            content = <Repositories repositories={this.state.repositories} />;
            lang = <Languages getUserTopLanguages={this.state.languages} />;
        

        return (
            <div className="main--container">
                
                <div className="main--content">
                <UserPanel user={this.state.user} />
                    {lang}
                    {content}
                </div>
            </div>
        );
    }
}

export default User;