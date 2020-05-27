import React from 'react';
import { shallow } from 'enzyme';
import Languages from './Languages';
import NotFound from '../NotFound/NotFound';

describe('<Languages />', () => {
    it('renders without crash', () => {
        shallow(<Languages languages=""/>);
    });

    it('returns an error when there are no languages', () => {
        const languages = shallow(<Languages languages=""/>);

        expect(languages.containsMatchingElement(<NotFound />)).toEqual(true);
    });

    it('doesn\'t return error when there are languages', () => {
        const languages = shallow(<Languages languages="{}"/>);

        expect(languages.containsMatchingElement(<NotFound />)).toEqual(false);
    });
});