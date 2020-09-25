import React from 'react';
import { mount } from 'enzyme';
import OptionButton from 'components/optionButton/optionButton.component';


describe('test', () => {
    let wrapper;
    let counter = 0;

    beforeEach(() => {
        wrapper = mount(<OptionButton
            clickHandler={() => counter++}
            value={'true'}>
                TEST
            </OptionButton>)
    })

    afterEach(() => {
        wrapper.unmount();
    })

    it('renders the option button component', () => {
        expect(wrapper.find('button').length).toEqual(1);
    })

    it('executes click handler', () => {
        wrapper.find('button').simulate('click');
        wrapper.update();
        expect(counter).toEqual(1);
    })

})