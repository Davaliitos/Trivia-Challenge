import { createSelector } from "reselect";

const selectScore = (state : any) => state.score;

export const selectAnswers = createSelector(
    [selectScore],
    (score) => score.answers
)

export const selectFinalScore = createSelector(
    [selectScore],
    (score) => score.score
)
