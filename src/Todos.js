import React from 'react';

const Todos = ({todos, deleteTodos}) => {
    const todoList = todos.length ? (
        todos.map(todo =>{
            return(
                <div className="collection-item" key={todo.id}>
                    <span>{todo.content}&nbsp; &nbsp; &nbsp;<button onClick={()=>{deleteTodos(todo.id)}}>delete</button></span>
                </div>
            )

        })
    ) : (
        <p className="center">You have no Todos</p>
        
    )
    return (
        <div className="collection">
            {todoList}
        </div>
    )
}

export default Todos;