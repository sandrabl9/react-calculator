import React from 'react';
import './DeleteButton.css';

const DeleteButton = (props)=> {
    return(
        <div className='delete-button'
        onClick={props.deleteHandler}>
            {props.children}
        </div>
    );
};

export default DeleteButton;