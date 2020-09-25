import React from 'react';

import './error-message.style.scss';

type Props = {
    errorCode : number
}


const ErrorMessage = ({errorCode} : Props) => (
    <img
        className="error-message"
        src={`https://http.cat/${errorCode}`}
        alt="error"
    />
)

export default ErrorMessage;