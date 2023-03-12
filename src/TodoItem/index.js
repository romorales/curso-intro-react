import React from 'react';
import './TodoItem.css';
import { TodoIcon } from '../TodoIcon';

function TodoItem(props) {
    return (
        <li className="TodoItem"> 
        <TodoIcon
            type="check"
            color ={props.completed  ? '#4caf50' : ''}
            onClick={props.onComplete}/>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
        <TodoIcon
             type="delete"
             onClick={props.onDelete}/>
        </li>
    );
}

export { TodoItem };