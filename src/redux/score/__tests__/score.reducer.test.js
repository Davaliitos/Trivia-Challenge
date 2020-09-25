import scoreReducer from 'redux/score/score.reducer';
import ScoreActionTypes from 'redux/score/score.types';

it('adds answer', () => {
    let state = {
        answers : [[true,false]]
    }
    const action = {
        type: ScoreActionTypes.ADD_ANSWER,
        payload: [false,false]
    };
    const newState = scoreReducer(state, action);
    expect(newState.answers).toEqual([[true,false],[false,false]]);
});

it('gets score', () => {
    let state = {
        answers : [['true','false']],
        score : []
    }
    const action = {
        type: ScoreActionTypes.GET_SCORE
    };
    const newState = scoreReducer(state, action);
    expect(newState.score).toEqual([false]);
})

it('clears score', () => {
    let state = {
        answers : [['true','false']],
        score : [false]
    }
    const action = {
        type: ScoreActionTypes.CLEAR_SCORE
    };
    const newState = scoreReducer(state, action);
    expect(newState.answers).toEqual([]);
    expect(newState.score).toEqual([]);
})