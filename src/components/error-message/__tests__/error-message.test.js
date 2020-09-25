import React from 'react';
import {mount} from 'enzyme';
import ErrorMessage from 'components/error-message/error-message.component';

let wrapper;

beforeEach(() => {
    wrapper = mount(
        <ErrorMessage
        errorCode={500}
        />
    )
})

afterEach(() => {
    wrapper.unmount();
})

it('renders the image element', () => {
    expect(wrapper.find('img').length).toEqual(1);
})

it('gets the correct error code prop', () => {
    expect(wrapper.prop('errorCode')).toEqual(500)
})