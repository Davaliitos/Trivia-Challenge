import React from 'react';
import { connect } from 'react-redux';

import { fetchQuestionsStart } from 'redux/questions/questions.actions';
import { clearScore } from 'redux/score/score.actions';


import QuestionsContainer from './quiz.container';
import QuestionCounter from 'components/question-counter/question-counter.component';
import {Question} from 'models/QuestionItem';


import './questions.style.scss';


type Props = {
    fetchQuestionsStart : any,
    clearScore : any,
    questions? : Question[]
}


class QuizPage extends React.Component<Props>{

    componentDidMount(){
      /*
        When the Quiz Page loads, it clears the current score, and fetches new questions
      */
      const { fetchQuestionsStart, clearScore } = this.props;
      clearScore();
      fetchQuestionsStart();
    }
    render(){
      return(
        <div className="quiz-page">
            <h2 className="quiz-page__page-title">QUESTIONS</h2>
            <QuestionsContainer/>
            <QuestionCounter/>
        </div>
      )
    }
}

  
const mapDispatchToProps = (dispatch: any) => ({
    fetchQuestionsStart: () => dispatch(fetchQuestionsStart()),
    clearScore : () => dispatch(clearScore())
})

export default connect(null,mapDispatchToProps)(QuizPage);
