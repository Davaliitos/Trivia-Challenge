import {createSelector} from 'reselect';

const selectQuestions = (state:any) => state.questions;

export const selectAllQuestions = createSelector(
    [selectQuestions],
    questions => questions.questions
)

export const selectAreQuestionsFetching = createSelector(
    [selectQuestions],
    questions => questions.isFetching
)

export const selectNumberOfQuestions = createSelector(
    [selectQuestions],
    questions => questions.questions ? questions.questions.length : 0
)

export const selectError = createSelector(
    [selectQuestions],
    questions => questions.errorMessage
)