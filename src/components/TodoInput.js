import React, { useRef, useState } from 'react'
import Button from './ui/Button'
import styles from './TodoInput.module.css'

const TodoInput = ({ addTodo }) => {
    const [enteredText, setEnteredText] = useState('')

    const inputRef = useRef()

    const submitHandler = (event) => {
        event.preventDefault();
        if (enteredText.trim() === '') {
            return
        }
        addTodo(enteredText)
        setEnteredText('')
    }
    return (
        <React.Fragment>
            <form onSubmit={submitHandler} className={styles['form-control']}>
                <input ref={inputRef} value={enteredText} type='text' placeholder='Enter your task here...' onChange={(e) => setEnteredText(e.target.value)} />
                <Button>Add Todo</Button>
            </form>
        </React.Fragment>
    )
}

export default TodoInput