import React from "react";
import { CreateTodo } from "../../Modal/CreateTodo";

function NewTodoPage(){
    return (
        <>
            <CreateTodo 
                label='Escribe tu nuevo todo'
                button='agregar'
                submitEvent={() => console.log('llamar add todo')}
            />
        </>
    )
}

export {NewTodoPage}