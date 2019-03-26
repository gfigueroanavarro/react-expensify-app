import React from 'react';
import {shallow} from 'enzyme';
import ExpenseListItem  from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem for a given expense', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}></ExpenseListItem>);
    expect(wrapper).toMatchSnapshot();
});