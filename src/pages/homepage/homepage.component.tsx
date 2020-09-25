import React from 'react';
import { withRouter } from 'react-router-dom';

import OptionButton from 'components/optionButton/optionButton.component';

import './homepage.style.scss';

type Props  = {
    history: any
}

const HomePage = ({history} : Props) => (
    <div className="homepage">
        <h2 className="homepage__title">Welcome to the Trivia Challenge!</h2>
        <h2 className="homepage__title">You will be presented with 10 True or False Questions</h2>
        <h2 className="homepage__title">Can you score 100%?</h2>
        <OptionButton clickHandler={() => history.push('/trivia')} className={"homepage__button"}>BEGIN</OptionButton>
    </div>
);

export default withRouter(HomePage);