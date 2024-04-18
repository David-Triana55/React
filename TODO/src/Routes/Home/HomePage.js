import React from "react";

import {TodoHeader } from '../../Components/TodoHeader/index' 
import {TodoCounter} from "../../Components/TodoCounter/TodoCounter"
import { TodoSearch } from "../../Components/TodoSearch/TodoSearch";
import { TodoList } from "../../Components/TodoList/TodoList";
import { TodoItem } from "../../Components/TodoItem/TodoItem";
import {ChangeAlertWithStorageListener} from '../../Components/ChangeAlert/index'
import {TodosError} from '../../Components/TodosError/TodosError'
import {TodosLoading} from '../../Components/TodosLoading/TodosLoading'
import { CreateTodoButton } from "../../Components/CreateTodoButton/CreateTodoButton";
import {EmptyTodos} from '../../Components/EmptyTodos/EmptyTodos'
import {Modal} from '../../Modal/Modal'
import {useTodos} from '../useTodos'
import {CreateTodo} from '../../Modal/CreateTodo'
import { useNavigate } from "react-router-dom";

function HomePage() {

    const navigate = useNavigate()

const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    editTodo,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,

} = useTodos()

return (
    <>
        <TodoHeader loading={loading}>
            <TodoCounter 
                totalTodos={totalTodos}
                completedTodos={completedTodos}
            /> 

            <TodoSearch 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                loading={loading}
            />    
        </TodoHeader>   

        <TodoList 
            error={error}
            loading={loading}
            searchedTodos={searchedTodos}
            searchValue={searchValue}
            totalTodos={totalTodos} 
            onError={() => <TodosError/>}
            onLoading={() => <TodosLoading/>}
            onEmptyTodos={() => <EmptyTodos/>}
            onEmptySearchResults={(text) => (
                <p>No se encontro resultado para: {text}</p>
        )}
            render={ todo => (
            <TodoItem 
                key={todo.id}   
                text={todo.text} 
                completed={todo.completed}
                onEdit={() => {
                    
                    navigate(`/edit/${todo.id}`, {state: {todo}})
                }}
                onComplete={() => completeTodo(todo.id)}
                onDelete={() => deleteTodo(todo.id)}
            />
        )}

        />    
        <CreateTodoButton 
            onClick={() => navigate('/new')}
        />

        <ChangeAlertWithStorageListener/>
{/* 
        {isOpen && (
            <Modal>
                <CreateTodo 
                    setIsOpen={setIsOpen}
                    isOpen={isOpen}
                    addTodo={addTodo}
                />
            </Modal>

        )} */}

    </>
    )
}

export  {HomePage};