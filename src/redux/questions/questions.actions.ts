import QuestionsActionTypes from './questions.types'
import {Question} from 'models/QuestionItem';

export const fetchQuestionsStart = () => ({
    type: QuestionsActionTypes.FETCH_QUESTIONS_START
})

export const fetchQuestionsFailure = (error : string) => ({
    type: QuestionsActionTypes.FETCH_QUESTIONS_FAILURE,
    payload: error
})

export const fetchQuestionsSuccess = (questions: Question[]) => ({
    type: QuestionsActionTypes.FETCH_QUESTIONS_SUCCESS,
    payload: questions
})