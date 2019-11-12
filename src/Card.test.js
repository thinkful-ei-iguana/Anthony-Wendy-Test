import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
});

describe('<Card />', () => {
    it('renders this UI as expected', () => {
        const tree = renderer.create(<Card />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});