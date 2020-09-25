import questionsReducer from 'redux/questions/questions.reducer';
import QuestionsActionTypes from 'redux/questions/questions.types';

it('handles questions fetching', () => {
    const action = {
        type: QuestionsActionTypes.FETCH_QUESTIONS_START
    };
    const newState = questionsReducer(undefined, action);
    expect(newState.isFetching).toEqual(true);
});

it('handles questions fetching failure', () => {
    const action = {
        type: QuestionsActionTypes.FETCH_QUESTIONS_FAILURE,
        payload: 'This is an error'
    }
    const newState = questionsReducer(undefined, action);
    expect(newState.errorMessage).toEqual('This is an error');
});

it('handles questions fetching success' , () => {
    const action = {
        type: QuestionsActionTypes.FETCH_QUESTIONS_SUCCESS,
        payload: 'This is the question'        
    }
    const newState = questionsReducer(undefined, action);
    expect(newState.questions).toEqual('This is the question');
});