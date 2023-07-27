import React, { useState } from 'react'
import ListItem from './ListItem'
import styles from './TodoContainer.module.css'
import TodoInput from './TodoInput'

const TodoContainer = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = todo => {
        setTodos([...todos, { id: Math.random().toString(), text: todo, done: false }])

    }
    const deleteTodoHandler = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const toggleDone = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : {
            ...todo
        }))
    }


    return (
        <div className={styles.container}>
            <h1>Your Todo List
            </h1>
            <TodoInput addTodo={addTodo} />
            {todos.map(text => (
                <ListItem key={text.id} id={text.id} text={text.text} done={text.done} deleteTodo={deleteTodoHandler}
                    toggleDone={toggleDone} />
            ))
            }
        </div>
    )
}

export default TodoContainer