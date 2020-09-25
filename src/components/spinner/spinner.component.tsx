import React from 'react';
import ErrorMessage from 'components/error-message/error-message.component';

import './spinner.style.scss'

type Props = {
    isLoading :  boolean,
    errorMessage : {
        message: string,
        response : {
            status: number
        }
    }
}


const WithSpinner = (WrappedComponent : React.ReactType) => {
    const Spinner = ({isLoading , errorMessage,  ...otherProps} : Props) => {
        if(isLoading){
            return (
                <div className="spinner-overlay">
                    <div className="spinner-container"/>
                </div>
            )
        }else if (errorMessage){
            return (
                <ErrorMessage errorCode={errorMessage.response.status}/>
            )
        } else{
            return (
                <WrappedComponent {...otherProps}/>
            )
        }
    }
    return Spinner;
}

export default WithSpinner;
