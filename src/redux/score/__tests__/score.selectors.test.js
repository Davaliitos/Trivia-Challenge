import {selectAnswers, selectFinalScore} from 'redux/score/score.selectors';

let mockState;

beforeEach(() => {
    mockState = { 
        score : {
            answers: [['true', 'False']],
            score : [true, false]
        }
    }
})


it('selects answers', () => {
    const selectedAnswers = selectAnswers.resultFunc(mockState.score);
    expect(selectedAnswers).toEqual([['true', 'False']])
})


it('selects final score', () => {
    const finalScore = selectFinalScore.resultFunc(mockState.score);
    expect(finalScore).toEqual( [true, false]);
})
