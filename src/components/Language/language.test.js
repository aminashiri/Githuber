import React from 'react';
import { shallow } from 'enzyme';
import Language from './Language';

describe('<Language />', () => {
    it('renders without crash', () => {
        shallow(<Language language="{}"/>);
    });
});
