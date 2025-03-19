import React, { useEffect, useReducer, useRef, useState } from 'react'
import './bai2.css'

export default function Bai2() {

    var [data, setData] = useState([]);
    var [editIndex, setEditIndex] = useState(null);
    var inputRef = useRef();

    useEffect(() => {
        var url = ''; 
        fetch(url)
            .then((res) => res.json())
            .then((dataApi) => {
                setData(dataApi);
            })
    }, []);

    function addTodo() {
        var newData = inputRef.current.value;
        if (newData === '') return;
        if (editIndex !== null) {
            var updateTodos = [...data];
            updateTodos[editIndex] = newData;
            setData(updateTodos);
            setEditIndex(null);
        } else {
            setData([...data, newData]);
        }
        inputRef.current.value = '';
    }

    function deleteTodo(index) {
        var updatedTodos = data.filter((_, i) => i !== index);
        setData(updatedTodos);
    };

    function editTodo(index) {
        setEditIndex(index);
        inputRef.current.value = data[index];
    };

    return (
        <>
            <div className="todo-container">
                <h2>Todo List</h2>
                <div className="todo-input-container">
                    <input ref={inputRef} type="text" />
                    <button onClick={addTodo}>{editIndex !== null ? 'Save' : 'Add'}</button>
                </div>
                <ul className="todo-list">
                    {data.map((todo, index) => (
                        <li key={index}>
                            <span>{todo}</span>
                            <button onClick={() => editTodo(index)}>Edit</button>
                            <button onClick={() => deleteTodo(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
