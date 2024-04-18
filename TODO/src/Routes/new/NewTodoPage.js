import React from "react";
import './todoPage.css'
import { CreateTodo } from "../../Modal/CreateTodo";
import { useTodos } from "../useTodos";

function NewTodoPage(){
    const {addTodo} = useTodos()
    return (
        <div className="container-main">
            <CreateTodo 
                label='Escribe tu nuevo todo'
                button='agregar'
                submitEvent={(text) => addTodo(text)}
            />
        </div>
    )
}

export {NewTodoPage}