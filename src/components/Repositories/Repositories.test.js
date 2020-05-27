import React from 'react';
import { shallow } from 'enzyme';
import Repositories from './Repositories';
import NotFound from '../NotFound/NotFound';

describe('<Repositories />', () => {
    it('renders without crash', () => {
        shallow(<Repositories repositories=""/>);
    });

    it('returns an error when there are no repositories', () => {
        const repositories = shallow(<Repositories repositories=""/>);

        expect(repositories.containsMatchingElement(<NotFound />)).toEqual(true);
    });

    it('doesn\'t return error when there are repositories', () => {
        const repositories = shallow(<Repositories repositories="{}"/>);

        expect(repositories.containsMatchingElement(<NotFound />)).toEqual(false);
    });
});