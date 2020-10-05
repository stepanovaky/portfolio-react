import React from 'react';
import renderer from 'react-test-renderer';
import Homepage from './Homepage';

test('it renders correctly', () => {
    const tree = renderer
        .create(<Homepage />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})