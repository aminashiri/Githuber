import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import Form from '../Form/Form';

describe('<Header />', () => {
    it('renders without crash', () => {
        shallow(<Header />);
    });

    it('contains form', () => {
        const header = shallow(<Header />);
        
        expect(header.containsMatchingElement(<Form />)).toEqual(true);
    });
});