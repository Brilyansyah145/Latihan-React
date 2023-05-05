import React from 'react'


const TodoItem =({todo}) => {
    return(
        <div style={style.TodoItem}>
            <p>{todo.title}</p>
        </div>
    )
}

const style = {
    border: '2px solid #f4f4f4',
    FontSize: '24px'
}
export default TodoItem