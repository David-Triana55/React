import React from "react";
import { CreateTodo } from "../../Modal/CreateTodo";

function EditTodoPage() {
    return (
        <>
            <CreateTodo 
                label='edita tu todo'
                button='editar'
                submitEvent={() => console.log('llamar edit todo')}
            />
        </>
    )
}

export { EditTodoPage}