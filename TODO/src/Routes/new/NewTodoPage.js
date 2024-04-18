import React from "react";
import { CreateTodo } from "../../Modal/CreateTodo";
import { useTodos } from "../useTodos";

function NewTodoPage(){
    const {addTodo} = useTodos()
    return (
        <>
            <CreateTodo 
                label='Escribe tu nuevo todo'
                button='agregar'
                submitEvent={(text) => addTodo(text)}
            />
        </>
    )
}

export {NewTodoPage}