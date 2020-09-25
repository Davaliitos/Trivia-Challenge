import {addAnswer, getScore, clearScore} from 'redux/score/score.actions';
import ScoreActionTypes from 'redux/score/score.types';

describe('adding Answer', () => {
    it('has the correct type', () => {
        const action = addAnswer();
        expect(action.type).toEqual(ScoreActionTypes.ADD_ANSWER);
    });
    
    it('has the correct payload', () => {
        const action = addAnswer('answer 1');
        expect(action.payload).toEqual('answer 1');
    })
})

describe('gets Score', () => {
    it('has the correct type', () => {
        const action = getScore();
        expect(action.type).toEqual(ScoreActionTypes.GET_SCORE);
    })
})

describe('clears Score', () => {
    it('has the correct type', () => {
        const action = clearScore();
        expect(action.type).toEqual(ScoreActionTypes.CLEAR_SCORE);
    })
})