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
    const done = props.done ? styles.done : undefined
    return (
        <div className={styles.box}>
            <p onClick={completeTodoHandler} className={done}>{props.text}
            </p>
            <Button onClick={deleteTodoHandler}>Delete</Button>
        </div>
    )
}

export default ListItem