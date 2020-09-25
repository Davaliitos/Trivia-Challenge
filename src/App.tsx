import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from 'pages/homepage/homepage.component';
import QuizPage from 'pages/quiz-page/quiz.page';
import ResultsPage from 'pages/results/results.page';

import { selectFinalScore } from 'redux/score/score.selectors';

import './App.css';

interface Props{
    finalScore: string[]
}


class App extends React.Component<Props>{

  render(){
    return(
      <div>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/trivia' component={QuizPage}/>
          <Route exact path='/results' render={() => this.props.finalScore.length === 0 ? (<Redirect to='/'/>) : (<ResultsPage/>)}/>
        </Switch>
      </div>
    )
  }

}

const mapStateToProps = createStructuredSelector({
  finalScore : selectFinalScore
})

export default connect(mapStateToProps)(App)