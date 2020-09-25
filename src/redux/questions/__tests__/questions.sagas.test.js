import { runSaga } from 'redux-saga';
import { takeLatest } from 'redux-saga/effects';

import { fetchQuestionsStart, fetchQuestionsAsync} from 'redux/questions/questions.sagas';
import QuestionActionTypes from 'redux/questions/questions.types';
import { fetchQuestionsSuccess, fetchQuestionsFailure } from 'redux/questions/questions.actions';
import * as api from 'axios/axios.utils';

describe('fetch questions from api', () => {
    const genObject = fetchQuestionsStart();

    it('should wait for latest FETCH QUESTIONS START action and call fetchQuestionsAsync', () =>{
        expect(genObject.next().value).toEqual(takeLatest(QuestionActionTypes.FETCH_QUESTIONS_START, fetchQuestionsAsync))
    })

    it('should be done on next iteration', () => {
        expect(genObject.next().done).toBeTruthy();
    })

})

describe('fetch questions async', () => {
    it('should call api and dispatch success action', async () => {
        const dummyQuestion = {
            data: {
                results : [{
                    category: 'general knowledge',
                    type: 'boolean',
                    question: 'Should we hire Fernando Dávalos?',
                    correct_answer : 'True'
                }]
            }
        }
        const requestQuestions = jest.spyOn(api,'getQuestions').mockImplementation(() => Promise.resolve(dummyQuestion));
        const dispatched = [];
        await runSaga({
            dispatch: (action) => dispatched.push(action)
        },fetchQuestionsAsync);
        
        expect(requestQuestions).toHaveBeenCalledTimes(1);
        expect(dispatched).toEqual([fetchQuestionsSuccess(dummyQuestion.data.results)]);
        requestQuestions.mockClear();
    })

    it('should call api and dispatch error action', async () => {
        const requestQuestions = jest.spyOn(api,'getQuestions').mockImplementation(() => Promise.reject());
        const dispatched = [];
        await runSaga({
            dispatch: (action) => dispatched.push(action)
        },fetchQuestionsAsync);
        expect(requestQuestions).toHaveBeenCalledTimes(1);
        expect(dispatched).toEqual([fetchQuestionsFailure()]);
        requestQuestions.mockClear();
    })
})