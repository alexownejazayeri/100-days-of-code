import React, { useRef, useContext } from 'react';

import { TodosContext } from '../store/todos-context';
import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => { 
    const todosCtx = useContext(TodosContext);
    
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {  // React gives us this special FormEvent type along with others like MouseEvent
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;  // Only use the `!` if you're sure this connection will be established

        if (enteredText.trim().length === 0) {
            // throw an error
            return;
        }

        todosCtx.addTodo(enteredText);

    };

    return (
        <form className={ classes.form } onSubmit={submitHandler}>
            <label htmlFor='text'>Todo Text</label>
            <input type='text' id='text' ref={todoTextInputRef} />
            <button>Add Todo</button>
        </form>
    )};

export default NewTodo;