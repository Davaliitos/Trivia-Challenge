import {selectAllQuestions, selectAreQuestionsFetching, selectNumberOfQuestions, selectError} from 'redux/questions/questions.selectors';

let mockState;

beforeEach(() => {
    mockState = { 
        questions: {
            questions: ['Question 1', 'Question 2'],
            isFetching : true,
            errorMessage : 'This is not working'
        }
    }
})


it('selects all questions', () => {
    const selectedQuestions = selectAllQuestions.resultFunc(mockState.questions);
    expect(selectedQuestions).toEqual( ['Question 1', 'Question 2'])
})


it('selects number of questions', () => {
    const numberOfQuestions = selectNumberOfQuestions.resultFunc(mockState.questions);
    expect(numberOfQuestions).toEqual(2);
})


it('selects error', () => {
    const selectedError = selectError.resultFunc(mockState.questions);
    expect(selectedError).toEqual('This is not working')
})

it('selects fetching status', () => {
    const currentStatus = selectAreQuestionsFetching.resultFunc(mockState.questions);
    expect(currentStatus).toEqual(true);
})