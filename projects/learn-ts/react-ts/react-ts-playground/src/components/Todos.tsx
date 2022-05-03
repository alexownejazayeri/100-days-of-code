import React from 'react';

const Todos: React.FC<{items: string[]}> = (props) => {
    return (
        <ul>
            {props.items.map((item) => (
                <li key={item}>{item}</li>
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