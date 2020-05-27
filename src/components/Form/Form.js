import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.state = {login: ''};
    }

    // Handle input change
    handleChange = (event) => {
        this.setState({
            login: event.target.value
        });
    }

    // Handle submit button
    handleSubmit = (event) => {
        event.preventDefault();

        const login = this.state.login.trim();

        if (login.length) {
            if (this.props.location.pathname !== `/user/${login}`) {
                this.props.history.push(`/user/${login}`);
            }
        }
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit} role="search">
                <label htmlFor="search" className="form--label is-hidden">Username</label>
                <input type="text" onChange={this.handleChange} placeholder="John Doe" id="search" className="form--input" />
                <input type="submit" value="Generieren" className="form--btn" />
            </form>
        );
    }
}

export default withRouter(Form);