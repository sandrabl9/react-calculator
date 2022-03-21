import React from 'react';
import './Button.css';

const Button = (props) => {

    const isOperator = operator => {
        return isNaN(operator) && (operator !== '.') && (operator !== '=');
         
    };

    return(
        <div 
        className={`button-container ${isOperator(props.children) ? 'operator':''}`.trimEnd()}
        onClick={() => props.clickHandler(props.children)}>
            {props.children}
        </div>
    );
};

export default Button;