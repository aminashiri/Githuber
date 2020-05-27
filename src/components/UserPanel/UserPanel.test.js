import React from 'react';
import { shallow } from 'enzyme';
import UserPanel from './UserPanel';

describe('<UserPanel />', () => {
    it('renders without crash', () => {
        shallow(<UserPanel user="{}"/>);
    });
});