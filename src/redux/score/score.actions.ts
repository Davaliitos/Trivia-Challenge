import ScoreActionTypes from './score.types';

export const addAnswer = (answer:any) => ({
    type: ScoreActionTypes.ADD_ANSWER,
    payload: answer
})

export const getScore = () => ({
    type: ScoreActionTypes.GET_SCORE
})

export const clearScore = () => ({
    type: ScoreActionTypes.CLEAR_SCORE
})
