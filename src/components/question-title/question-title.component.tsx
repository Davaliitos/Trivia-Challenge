import React from 'react';
import './question-title.style.scss';

type Props = {
    question : string,
    category: string
}


const QuestionTitle = ({question, category}: Props) => (
    <div className="question-title">
        <div className="question-title__card">
            <div className="question-tilte__card_image">
                <div className="question-tilte__card_image__icon"/>
            </div>
            <div className="question-title__card__description">
                <h5>{decodeURIComponent(category)}</h5>
                <p>{decodeURIComponent(question)}</p>
            </div>            
        </div>
    </div>  
)

export default QuestionTitle