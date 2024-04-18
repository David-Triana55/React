import { useNavigate } from 'react-router-dom'
import './CreateTodo.css'
import { useState } from 'react'
function CreateTodo(props){
    const navigate = useNavigate()
    const [newTodoValue, setNewTodoValue] = useState(props.defaultValue ||'')

    const onSubmit = (event) => {
        event.preventDefault()
        props.submitEvent(newTodoValue)
        navigate('/')        
    }

    const onCancel = () => {
        navigate('/')
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    return (
        <form onSubmit={onSubmit}>
            <label>{props.label}</label>
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
                >{props.button}</button>
            </div>
        </form>
    )
}

export { CreateTodo}