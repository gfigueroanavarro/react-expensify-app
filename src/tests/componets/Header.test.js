//react-test-renderer
import React from 'react';
//import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';
import {shallow} from 'enzyme';

test('should render Header correctly',()=>{
    const wrapper = shallow(<Header></Header>);
    expect(wrapper).toMatchSnapshot();
    //expect(wrapper.find('h1').text()).toBe('Expensify');

    /*const renderer = new ReactShallowRenderer();
    renderer.render(<Header></Header>);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
    console.log(renderer.getRenderOutput());*/
});
