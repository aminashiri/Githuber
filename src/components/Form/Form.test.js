import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('<Form />', () => {
    it('renders without crash', () => {
        shallow(<Form />);
    });

    it('updates state after change the value in the input', () => {
        const form = shallow(<Form />);

        form.find('#search').simulate('change', { target: {value: 'Username'} });
        expect(form.state('login')).toEqual('Username');
    });
});