import React from 'react'
import styles from './ListItem.module.css'
import Button from './ui/Button'

const ListItem = (props) => {
    const deleteTodoHandler = () => {
        props.deleteTodo(props.id)
    }
    const completeTodoHandler = () => {
        props.toggleDone(props.id)
    }
    return (
        <div className={`${styles.box} ${props.done ? styles.completed : ''}`}>
            <p onClick={completeTodoHandler} className={props.done ? styles.done : ''}>
                {props.text}
            </p>
            <Button onClick={deleteTodoHandler} >Delete</Button>
        </div>
    )
}

export default ListItem