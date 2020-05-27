import React from 'react';
import { shallow } from 'enzyme';
import Repository from './Repository';

describe('<Repository />', () => {
    it('renders without crash', () => {
        shallow(<Repository repository="{}"/>);
    });
});
