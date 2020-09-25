import React, { Component, useLayoutEffect} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { selectAllQuestions } from 'redux/questions/questions.selectors';
import { getScore } from 'redux/score/score.actions';

import QuestionCard from 'components/question-card/question-card.component';
import { Question } from 'models/QuestionItem';

import './list-questions.style.scss'



interface Props extends RouteComponentProps {
    questions : Question[],
    getScore: any
}

type ListState = {
    currentIndex : number,
    windowSize : number
}


class ListCards extends Component<Props,ListState> {

    constructor(props : Props){
        super(props);
        this.state = {
            currentIndex : 0,
            windowSize: 0
        }
    }

    /*
        Catches window resize in order to asign correct transform values
    */
    useWindowSize = () => {
        const windowSize = this.state.windowSize;
        useLayoutEffect(() => {
            const updateSize = () => {
                this.setState({windowSize: window.outerWidth})
            }
            window.addEventListener('resize',updateSize);
            updateSize();
            return () => window.removeEventListener('resize', updateSize);
        }, []);
        return windowSize;
    }


    getOpacity = (position:string): number => {
        if(position === 'current'){
            return 1;
        }else{
            return 0.6;
        }
    }

    getZIndex = (position:string):number => {
        switch(position){
            case 'current':
                return 2;
            default:
                return 1;
        }
    }

    /*
        This function transforms cards positions when you select an answer
        Assigns different values depending on the window size
    */
    getTransform = (position: string, windowSize: number): string =>{

        let transformRight = -25;
        let transformLeft = -75;

        if(windowSize < 479){
            transformRight = -36;
            transformLeft = -64;
        }else if(windowSize < 767){
            transformRight = -32;
            transformLeft = -68;
        }
        

        if(position === 'prev'){
            return 'translate(' + transformLeft + '%, 0%) scale(0.82)'
        }
        if(position === 'next'){
            return 'translate(' + transformRight + '%, 0%) scale(0.82)'
        }
        return 'translate(-50%,0%)'
    }

    getBoxShadow = (position: string): string => {
        if(position === 'current'){
            return '30px 0px 20px -20px rgba(0, 0, 0, .4), -30px 0px 20px -20px rgba(0, 0, 0, .4)';
        }
        return 'unset'
    }

    /*
        This function will decide if a card renders or not.
        it will only render the cards at the current index, along with the previous and the next one
    */
    getQuestionClass = (index: number): string => {
        const { currentIndex } = this.state;
        if(currentIndex === null){
            return 'hidden'
        }
        if(index === currentIndex){
            return 'current'
        }
        if(index === currentIndex + 1){
            return 'next';
        }
        if(index === currentIndex - 1){
            return 'prev';
        }
        return 'hidden'
    }

    /*
        After a question is answered, this function is triggered.
        This function increments the index. After reaching the end of the array,
        it calculates the score and redirects to the results page.
    */
    handleChangePage = () => {
        const { questions, history, getScore} = this.props;
        const { currentIndex } = this.state;
        if(currentIndex + 1 === questions.length){
            getScore();
            history.push('/results')
        }

        this.setState({currentIndex: currentIndex + 1})
    }

    /*
        This function returns the rendered cards
    */
    ChildComponents = (): any => {
        const { questions } = this.props;
        const windowSize = this.useWindowSize();

        if(questions){
            return questions.map((question: any, index: number) => {
                const position = this.getQuestionClass(index);                
                if(position !== 'hidden'){
                    return(
                        <div
                        key={index}
                        className="card card-style"
                        style={{
                            opacity: this.getOpacity(position),
                            zIndex: this.getZIndex(position),
                            transform: this.getTransform(position, windowSize),
                            boxShadow: this.getBoxShadow(position)
                        }}
                        >
                            <QuestionCard question={question} changePage={this.handleChangePage} isCurrentPage={position === 'current'}/>
                        </div>
                    )
                }
                return null;
            })
        }


        return (
            <div></div>
        )
    }


    render(){
        return (
            <div className="list-questions__container">
                <this.ChildComponents/>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    questions: selectAllQuestions
})

const mapDispatchToProps = (dispatch : any) => ({
    getScore : () => dispatch(getScore())
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ListCards));