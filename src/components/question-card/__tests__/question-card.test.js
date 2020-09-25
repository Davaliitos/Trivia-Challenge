import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import QuestionCard from 'components/question-card/question-card.component';
import QuestionTitle from 'components/question-title/question-title.component';
import OptionButton from 'components/optionButton/optionButton.component';
import { addAnswer } from 'redux/score/score.actions';

let wrapper;
let store;
let counter = 0;

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

const question = {
    category: 'general knowledge',
    type: 'boolean',
    question: 'Should we hire Fernando Dávalos?',
    correct_answer : 'True'
}

const mockStore = configureStore();

beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
        <Provider store={store}>
            <QuestionCard
                question={question}
                changePage={() => counter++}
            />
        </Provider>
    )
})

afterEach(() => {
    wrapper.unmount();
})

it('loads all elements', () =>{
    expect(wrapper.find(OptionButton).length).toEqual(2);
    expect(wrapper.find(QuestionTitle).length).toEqual(1);
})

it('checks props', () => {
    expect(wrapper.find(QuestionCard).prop('question')).toEqual(question);
    expect(wrapper.find(QuestionCard).prop('changePage')).toBeTruthy();
})

it('checks action on adding answer', () => {
    let action;
    store.dispatch(addAnswer(['true','True']))
    action = store.getActions();
    expect(action[0].type).toBe('ADD_ANSWER')
})
