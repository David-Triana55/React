import React from 'react'
import './TodoCounter.css'

function TodoCounter({totalTodos, completedTodos, loading}){
    return(
        <h1 className='TodoCounter' disabled={loading}>
            has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS
        </h1>
    )
}

export {TodoCounter}