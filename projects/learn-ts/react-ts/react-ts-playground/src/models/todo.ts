// This modern class syntax is js, but also available
// in TS. Some slight difference:
// you can add properties directly in the class
// in the braces (doesn't need to be in constructor)

class Todo {
    id: string;
    text: string;

    constructor(todoText: string) {
        this.text = todoText;
        this.id = new Date().toISOString();
    }
}

export default Todo;

// Very similar to how we'd to this in plain js
// We can use this in App.tsx now to create todos