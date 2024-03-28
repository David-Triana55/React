import React from "react";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { TodosLoading } from "../TodosLoading/TodosLoading";
import { TodosError } from "../TodosError/TodosError";
import { EmptyTodos } from "../EmptyTodos/EmptyTodos";
import { TodoContext } from "../TodoContext/CreateContext";
import { Modal } from "../Modal/Modal";
import { CreateTodo } from "../Modal/CreateTodo";

export function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        isOpen,
        setIsOpen
    } = React.useContext(TodoContext)
    return (
        <>
            <TodoCounter/> {/*props */}

            <TodoSearch />        
            
            <TodoList>
                {loading && (
                    <>
                        <TodosLoading/>
                        <TodosLoading/>
                        <TodosLoading/>
                    </>
                )}
                {error && <TodosError/>}

                {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}

                {searchedTodos.map(todo =>(
                    <TodoItem 
                        key={todo.text}   
                        text={todo.text} 
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
                
            </TodoList>
            <CreateTodoButton />

            {isOpen && (
                <Modal>
                    <CreateTodo/>
                </Modal>

            )}

        </>
    )
}