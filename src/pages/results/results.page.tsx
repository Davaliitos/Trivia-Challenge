import React, { Component} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { selectFinalScore } from 'redux/score/score.selectors';
import { selectAllQuestions } from 'redux/questions/questions.selectors';

import {Question} from 'models/QuestionItem';
import {ReactComponent as TickIcon} from 'assets/tick.svg';
import {ReactComponent as ErrorIcon} from 'assets/cross.svg';

import OptionButton from 'components/optionButton/optionButton.component';

import './results.style.scss'


interface Props extends RouteComponentProps{
    finalScore : boolean[],
    questions: Question[]
}

class ResultsPage extends Component<Props> {


    calculateTotal = () => {
        const { finalScore } = this.props;
        let correctAnwers = 0;
        finalScore.forEach((score : boolean) =>{
            if(score){
                correctAnwers++;
            }
        })
        return [correctAnwers, finalScore.length]
    }


    render(){
        const { questions, finalScore, history} = this.props;

        const [correctAnswers, numberOfQuestions] = this.calculateTotal();

        return(
            <div className="page-container">
                <div className="page-center">
                    <div className="content-sidebar-wrap">
                        <main className="content">
                            <article className="results">
                                <header className="results-header">
                                    <h2 className="results-title">Results Page</h2>
                                </header>
                                <div className="results-content">
                                    <div className="score-board">
                                        <h2 className="score-board__title">You Scored</h2>
                                        <h2 className="score-board__score">{correctAnswers}/{numberOfQuestions}</h2>
                                    </div>
                                    {
                                        questions.map((question: Question, index: number) => {
                                            return(
                                                <div className="question-block" key={index}>
                                                    <div className="question">
                                                        <p>{decodeURIComponent(question.question)}</p>
                                                    </div>
                                                    <div className="correct-answer-container">
                                                        Answer
                                                        <div className="correct-answer">
                                                        {decodeURIComponent(question.correct_answer)}
                                                        </div>
                                                    </div>
                                                    <div className="question-result">
                                                        {
                                                            finalScore[index] ? (
                                                                <TickIcon className="icon"/>
                                                            ) : (
                                                                <ErrorIcon className="icon"/>
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                                
                                            )
                                        })
                                    }
                                </div>
                            </article>
                        </main>
                        <aside className="sidebar">
                            <section className="elements">
                                <OptionButton
                                    clickHandler={() => history.push('/')}
                                    className={'results__button'}
                                >
                                    PLAY AGAIN?
                                </OptionButton>
                            </section>
                        </aside>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    finalScore : selectFinalScore,
    questions : selectAllQuestions
})

export default withRouter(connect(mapStateToProps)(ResultsPage));