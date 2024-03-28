import { useContext } from 'react'
import './CreateTodoButton.css'
import { TodoContext } from '../TodoContext/CreateContext'

function CreateTodoButton(){
    const {setIsOpen, isOpen} = useContext(TodoContext) 
    return (
        <button 
            className='CreateTodoButton'  
            onClick={() => 
                {setIsOpen(!isOpen)}
            }
        >+</button>
    )
}

export { CreateTodoButton}