import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './NotFound';

describe('<NotFound />', () => {
    it('renders without crash', () => {
        shallow(<NotFound />);
    });

    it('renders correct content', () => {
        const notFound = shallow(<NotFound heading="Heading" message="Message"/>);
        
        expect(notFound.find('.panel--title').text()).toEqual('Heading');
        expect(notFound.find('.panel--content').text()).toEqual('Message');
    });
});