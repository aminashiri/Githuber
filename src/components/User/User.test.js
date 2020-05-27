import React from 'react';
import { shallow } from 'enzyme';
import User from './User';
import Loading from '../Loading';
import NotFound from '../NotFound';
import languages from '../languages';
import Repositories from '../Repositories';

describe('<User />', () => {
    it('renders without crash', () => {
        const props = { params: {username: 'Username'} };

        shallow(<User match={props} />);
    });

    it('returns loading when user data not loaded', () => {
        const props = { params: {username: 'Username'} };
        const user = shallow(<User match={props} />);
        
        expect(user.type()).toEqual(Loading);
    });

    it('returns an error when user not exist', () => {
        const props = { params: {username: 'Username'} };
        const user = shallow(<User match={props} />);
        
        user.setState({ user: {message: 'Not Found'} });
        expect(user.type()).toEqual(NotFound);
    });

    it('renders repositories', () => {
        const props = { params: {username: 'Username', repository: false} };
        const user = shallow(<User match={props} />);
        
        user.setState({ user: 'Username' });
        expect(user.containsMatchingElement(<Repositories />)).toEqual(true);
    });

    it('renders repository languages', () => {
        const props = { params: {username: 'Username', repository: true} };
        const user = shallow(<User match={props} />);

        user.setState({ user: 'Username' });
        expect(user.containsMatchingElement(<languages />)).toEqual(true);
    });
});