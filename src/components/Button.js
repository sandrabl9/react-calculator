import React from 'react';

const Button = (props) => {

    const isOperator = operator => {
        return isNaN(operator) && (operator !== '.') (operator !== '=')
         
    };

    return(
        <div className={`button-container ${isOperator(props.children) ? 'operator':null}`}>
            {props.children}
        </div>
    );
};

export default Button;