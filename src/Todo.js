import React, { useState } from 'react';

const TodoForm = (props) => {
    const [newTodo, setNewTodo] = useState('');
    const addTodo = props.addTodo;
    return (
        <form className="todo-form"
            onSubmit={(event) => {
                event.preventDefault();
                console.log(newTodo);
                addTodo(newTodo);
                setNewTodo('');
            }}>
            <input type='text'
                placeholder='New Todo'
                value={newTodo}
                onChange={(event) => {
                    setNewTodo(event.target.value);
                }}></input>
            <button type='submit'>Submit</button>
        </form>
    )
}

const TodoList = (props) => {
    const todoList = props.todoList;
    return (
        <div className="todo-list" >
            {
                todoList.map((item, index) => {
                    return (
                        <h3 key={item + 1}>{`${index + 1}: ${item}`}</h3>
                    )
                })
            }
        </div>
    )
}

const Todo = (props) => {
    const [todoList, setTodoList] = useState([]);
    function addTodo(todo) {
        let copy = [...todoList];
        copy.push(todo);
        setTodoList(copy);
    }
    return (
        <div className="todo">
            <h1>Todo</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList todoList={todoList} />
        </div>
    )
}

export default Todo;
