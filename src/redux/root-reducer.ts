import {combineReducers} from 'redux';

import questionsReducer from 'redux/questions/questions.reducer';
import scoreReducer from 'redux/score/score.reducer';

const rootReducer = combineReducers({
    questions: questionsReducer,
    score: scoreReducer
});

export default rootReducer;