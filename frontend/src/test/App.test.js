import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow,configure } from 'enzyme';
import App from '../App';

configure({adapter: new Adapter()});

test('the page gets displayed with an input', () => {
    const wrapper = shallow(<App/>);

    
expect(wrapper.find('.sampledata')).toBeDefined();
expect(wrapper.find('.display-data-class')).toBeDefined();
expect(wrapper.find('.sample-data-class')).toBeDefined();

})