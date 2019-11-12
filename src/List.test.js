import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List cards= {[{title: '', content: ''}, {title: '', content: ''}]} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

describe('<List />', () => {
    it('renders this UI as expected', () => {
        const tree = renderer.create(<List name="List" header="Header" cards={[{id: '1', title: '1', content: 'test'}]}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});