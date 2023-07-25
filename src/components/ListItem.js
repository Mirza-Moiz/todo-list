import React from 'react'
import styles from './ListItem.module.css'
import Button from './ui/Button'

const ListItem = (props) => {
    const deleteTodoHandler = () => {
        props.deleteTodo(props.id)
    }
    return (
        <div className={styles.box}>
            <p>{props.text}</p>
            <Button onClick={deleteTodoHandler}>Delete</Button>
        </div>
    )
}

export default ListItem