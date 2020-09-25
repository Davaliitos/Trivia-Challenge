import { call, put, takeLatest, all} from 'redux-saga/effects';

import { fetchQuestionsSuccess, fetchQuestionsFailure } from './questions.actions';

import QuestionsActionTypes from './questions.types';
import { getQuestions } from 'axios/axios.utils';


export function* fetchQuestionsAsync(){
    try{
        const {data: {results}} = yield call(getQuestions);
        yield put(fetchQuestionsSuccess(results))
    }catch(error){
        yield put(fetchQuestionsFailure(error));
    }
}


export function* fetchQuestionsStart(){
    yield takeLatest(
        QuestionsActionTypes.FETCH_QUESTIONS_START,
        fetchQuestionsAsync
    );
}

export function* questionsSagas(){
    yield all([call(fetchQuestionsStart)])
}