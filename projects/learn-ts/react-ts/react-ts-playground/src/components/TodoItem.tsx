import React from 'react';
import classes from './TodoItem.module.css';

const TodoItem: React.FC<{text: string, onRemoveTodo: () => void}> = (props) => {
    return (
        <div className={classes.item} onClick={props.onRemoveTodo}>
            <li>{props.text}</li>
        </div>
    )
};

export default TodoItem;