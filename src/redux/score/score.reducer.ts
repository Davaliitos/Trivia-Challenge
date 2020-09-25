import ScoreActionTypes from './score.types';
import { addAnswerToScore, calculateScore } from './score.utils'

const INITIAL_STATE = {
    answers : [],
    score: []
}

const scoreReducer = (state = INITIAL_STATE, action: any) => {
    switch(action.type){
        case ScoreActionTypes.ADD_ANSWER:
            return{
                ...state,
                answers : addAnswerToScore(state.answers, action.payload)
            }
        case ScoreActionTypes.GET_SCORE:
            return{
                ...state,
                score : calculateScore(state.answers)
            }
        case ScoreActionTypes.CLEAR_SCORE:
            return {
                answers: [],
                score: []
            }
        default:
            return state;
    }
}

export default scoreReducer;