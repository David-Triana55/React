import { TodoContext } from '../TodoContext/CreateContext'
import './CreateTodo.css'
import { useContext, useState } from 'react'
function CreateTodo(){
    const {setIsOpen,IsOpen, addTodo} = useContext(TodoContext)

    const [newTodoValue, setNewTodoValue] = useState('')

    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setIsOpen(false)
    }

    const onCancel = () => {
        setIsOpen(false)
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)

    }
    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                placeholder='Cortar cebolla para el almuerzo'
                value={newTodoValue}
                onChange={onChange}

            />

            <div className='TodoForm-buttonContainer'>
                <button
                    onClick={onCancel}
                    type='button'
                    className='TodoForm-button
                    TodoForm-button--cancel'
                >Cancelar</button>

                <button 
                    type='submit'
                    className='TodoForm-button
                    TodoForm-button--add'
                >Agregar</button>
            </div>
        </form>
    )
}

export { CreateTodo}