import React from 'react';
import './optionButton.style.scss';

type Props = {
    children : string,
    clickHandler : (ev: React.MouseEvent<HTMLButtonElement>) => void,
    value?: string,
    className? : Object
}


const OptionButton = ({children, clickHandler, value, className} : Props) => (
    <button type="button" className={`${className}  big-button`} onClick={clickHandler} value={value}>
        {children}
    </button>
)

export default OptionButton;