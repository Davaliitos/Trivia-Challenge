import {fetchQuestionsStart, fetchQuestionsSuccess, fetchQuestionsFailure} from 'redux/questions/questions.actions';
import QuestionsActionTypes from 'redux/questions/questions.types';

describe('fetching questions start', () => {
    it('has the correct type', () => {
        const action = fetchQuestionsStart();
        expect(action.type).toEqual(QuestionsActionTypes.FETCH_QUESTIONS_START);
    })
})

describe('fetches questions success', () => {
    it('has the correct type', () => {
        const action = fetchQuestionsSuccess();
        expect(action.type).toEqual(QuestionsActionTypes.FETCH_QUESTIONS_SUCCESS);
    })
    it('has the correct payload', () => {
        const question1 = {
            category: 'general knowledge',
            type: 'boolean',
            question: 'Should we hire Fernando Dávalos?',
            correct_answer : 'True'
        }
        const action = fetchQuestionsSuccess([question1]);
        expect(action.payload).toEqual([question1]);
    })
})

describe('fetch questions error', () => {
    it('has the correct type', () => {
        const action = fetchQuestionsFailure();
        expect(action.type).toEqual(QuestionsActionTypes.FETCH_QUESTIONS_FAILURE);
    })
    it('has the correct payload', () => {
        const action = fetchQuestionsSuccess('THIS IS AN ERROR');
        expect(action.payload).toEqual('THIS IS AN ERROR');
    })
})