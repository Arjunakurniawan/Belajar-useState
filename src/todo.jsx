import React from 'react';
import { useState } from 'react';


function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    function handleChange(e){
        setInputValue(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        setTodos([...todos, inputValue])
        setInputValue('')
    }

    function handleDelete(index){
        const newTodos  = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    return (
        <>
            <form>
                <h1>Catatan hari ini</h1>
                <input type="text" value={inputValue} onChange={handleChange}/>
                <button onClick={handleSubmit}>add button</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li key={todo}>{todo}
                        <button onClick={() =>handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TodoList;