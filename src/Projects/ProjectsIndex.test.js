import React from 'react';
import renderer from 'react-test-renderer';
import ProjectsIndex from './ProjectsIndex';

it('renders correctly', () => {
    const tree = renderer
        .create(<ProjectsIndex />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})