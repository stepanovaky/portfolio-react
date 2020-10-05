import React from 'react';
import renderer from 'react-test-renderer';
import KingQuizApp from './KingQuizApp';

it('renders correctly', () => {
    const tree = renderer
        .create(<KingQuizApp />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})