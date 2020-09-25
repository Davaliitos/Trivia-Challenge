import React from 'react';
import { connect } from 'react-redux';

import QuestionTitle from '../question-title/question-title.component';
import OptionButton from '../optionButton/optionButton.component';
import { Question } from 'models/QuestionItem';

import {addAnswer} from 'redux/score/score.actions';

import './question-card.style.scss'

type Props = {
    question : Question,
    addAnswer: any,
    changePage: () => void;
    isCurrentPage: boolean;
}


const QuestionCard = ({question, addAnswer, changePage, isCurrentPage}: Props) => {

    /*
        Click Handler that will push the selected answer and the correct answer to the state
        It changes the current card and moves to the next
    */
    const answerHandler = (ev: React.MouseEvent<HTMLButtonElement>):void => {
        //Disables click functionality to the 'next' and 'prev'cards, to avoid wrong answers

        if(!isCurrentPage){
            return;
        }
        addAnswer([ev.currentTarget.value, question.correct_answer])
        changePage()
    }

    return (
        <div className="question-card">
            <QuestionTitle question={question.question} category={question.category}/>
            <div className="question-card__answers-options">
                <OptionButton
                    clickHandler={answerHandler}
                    value='true'
                    className={'green-background answer-button'}
                >
                    True
                </OptionButton>
                <OptionButton
                    clickHandler={answerHandler}
                    value='false'
                    className={'red-background answer-button'}
                >
                    False
                </OptionButton>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch:any) => ({
    addAnswer : (answer:any) => dispatch(addAnswer(answer))
})

export default connect(null,mapDispatchToProps)(QuestionCard)