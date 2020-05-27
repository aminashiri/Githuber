import React from 'react';
import { shallow } from 'enzyme';
import Start from './Start';

describe('<Start />', () => {
    it('renders without crash', () => {
        shallow(<Start />);
    });
});