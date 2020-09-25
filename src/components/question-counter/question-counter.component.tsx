import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectAnswers } from 'redux/score/score.selectors';
import { selectNumberOfQuestions } from 'redux/questions/questions.selectors';

import './question.counter.style.scss'

interface Props{
    numberOfQuestions : number,
    currentQuestion : string[]
}

const QuestionCounter = ({currentQuestion, numberOfQuestions} : Props) => {
    return(
        numberOfQuestions > 0 ? (
        <div className="question-counter">
            {currentQuestion.length + 1} of {numberOfQuestions}
        </div> ) : null
    )
}

const mapStateToProps = createStructuredSelector({
    currentQuestion : selectAnswers,
    numberOfQuestions : selectNumberOfQuestions
})

export default connect(mapStateToProps)(QuestionCounter);