import React, {useContext} from 'react';
import TodoItem from './TodoItem';
import { TodosContext } from '../store/todos-context';
import classes from './Todos.module.css';

//==== Using props + TS ======
// A functional component can be converted into a 'Generic Function'
// This means in the end it will be clear it's a React component function
// and that we can define our own custom props to 

const Todos: React.FC = () => {
    const todosCtx = useContext(TodosContext);

    return (
        <ul className={classes.todos} >
            {todosCtx.items.map((item) => (
                <TodoItem key={item.id} onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)} text={item.text} />
            ))}
        </ul>
    );
 }

export default Todos;

// ======= What's React.FC doing? ====

// Makes it clear that Todos is a function
// that acts like a function component
// and will have a children prop (accessible via autocomplete on props...)

// FC is a generic type; we can merge our own props
// with the base props (like children)