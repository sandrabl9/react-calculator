import React from 'react';
import './ResetButton.css';

const ResetButton = (props)=> {
    return(
        <div className='reset-button'
        onClick={props.resetHandler}>
            {props.children}
        </div>
    );
};

export default ResetButton;