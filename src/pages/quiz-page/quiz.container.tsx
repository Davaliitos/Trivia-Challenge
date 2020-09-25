import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectAreQuestionsFetching, selectError } from 'redux/questions/questions.selectors';
import WithSpinner from 'components/spinner/spinner.component';
import ListQuestions from 'components/list-questions/list-questions.component'

const mapStateToProps = createStructuredSelector({
    isLoading : selectAreQuestionsFetching,
    errorMessage : selectError
})

const QuizContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(ListQuestions) as React.ComponentType

export default QuizContainer