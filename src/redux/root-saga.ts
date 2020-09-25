import {all, call} from 'redux-saga/effects';
import {questionsSagas} from 'redux/questions/questions.sagas';

export default function* rootSaga(){
    yield all([call(questionsSagas)])
}