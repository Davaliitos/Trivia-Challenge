import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter }from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {  mount } from 'enzyme';
import ListQuestions from 'components/list-questions/list-questions.component';



describe('LIst Questions' , () => {
    const initialState = {
        questions: {
            questions: [{
                category: 'general knowledge',
                type: 'boolean',
                question: 'Should we hire Fernando Dávalos?',
                correct_answer : 'True'
            }],
            isFetching: false,
            errorMessage: undefined
        },
        score: {
            answers: [],
            score: []
        }
    }
    const mockStore = configureStore();
    let store, wrapper;

    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = mount( <Provider store={store}>
                <BrowserRouter>
                    <ListQuestions/>
                </BrowserRouter>
            </Provider>)
    })

    afterEach(() => {
        wrapper.unmount();
    })


    it('renders the List Questions component', () => {
        expect(wrapper.find(ListQuestions).length).toEqual(1);
    })
})

