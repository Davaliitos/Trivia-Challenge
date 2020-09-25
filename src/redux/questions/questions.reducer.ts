import QuestionsActionTypes from './questions.types';

const INITIAL_STATE = {
    questions: undefined,
    isFetching: false,
    errorMessage: null
}

const questionsReducer = (state = INITIAL_STATE, action: any) => {
    switch(action.type){
        case QuestionsActionTypes.FETCH_QUESTIONS_START:
            return{
                ...state,
                isFetching: true
            }
        case QuestionsActionTypes.FETCH_QUESTIONS_SUCCESS:
            return{
                isFetching: false,
                questions: action.payload,
                errorMessage: null
            }
        case QuestionsActionTypes.FETCH_QUESTIONS_FAILURE:
            return{
                ...state,
                isFetching: false,
                errorMessage:  action.payload
            }
        default:
            return state;
    }
}

export default questionsReducer;