import React from 'react';

// ====== Working with Props & TypeScript

// Notice that when simply passing props, we get an error (can try in code below)
// We can assign a type to our expected props, but remember there's always a 
// special 'children' prop whose type we don't necessarily know

// Because it's cumbersome to add types for all our custom and builtin props
// React gives us .FC that's demonstrated in the Todos.tsx file

function MyCumbersomeTsxComponent(props: { items: string[], children: any }) {
    <div>
        {props.items}
    </div>
}

export default MyCumbersomeTsxComponent;

// Remember that it's bad practice to use the 'any' type since this defeats the purpose
// of type safety in the first place. This component is a good example of the wrong
// way to do this!