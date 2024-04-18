import React from "react";
import { CreateTodo } from "../../Modal/CreateTodo";
import { useTodos } from "../useTodos";
import { useLocation, useParams } from "react-router-dom";

function EditTodoPage() {
    const location = useLocation()
    const params = useParams()

    const {editTodo, getTodo, loading} = useTodos()
    const num = parseInt(params.id)

    let todoText;

    if(location.state?.todo){
        todoText = location.state.todo.text
    } else if(loading) {
        return <p>Cargando...</p>
    } else {
        const todo = getTodo(num)
        todoText = todo.text
    }
    
        return (
            <>
                <CreateTodo 
                    label='edita tu todo'   
                    defaultValue={todoText}
                    button='editar'
                    submitEvent={(text) => editTodo(num,text)}
                />
            </>
        )

}

export { EditTodoPage}