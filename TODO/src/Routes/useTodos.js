import {useState } from "react";
import { useLocalStorage } from "./useLocalStogare";
import { TodoList } from "../Components/TodoList/TodoList";


function useTodos (){
    
    const {
        item: todos,
        saveItem: saveTodo,
        loading,
        error
    } = useLocalStorage('todo', [])
    
    const [searchValue, setSearchValue] = useState('') // estado de TodoSearch
    const [isOpen, setIsOpen] = useState(false)

    let completedTodos = todos.filter(todo => !!todo.completed).length
    let totalTodos = todos.length


    const searchedTodos = todos.filter((todo) => {
        const todoText = (todo.text || '').toLowerCase(); 
        const searchText = searchValue.toLowerCase();
    
        return todoText.includes(searchText);
    })
    

    const addTodo = (text) => {
        const id = newId(todos)
        const newTodos = [...todos]
        newTodos.push({
            text,
            completed: false,
            id
        })
        saveTodo(newTodos)
    }

    const getTodo = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id === id)
        return todos[todoIndex]
    }    

    const completeTodo = (id) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(todo => todo.id === id)
        newTodos[todoIndex].completed = true
        saveTodo(newTodos)
    }

    const editTodo = (id, newText) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(todo => todo.id === id)
        newTodos[todoIndex].text = newText
        saveTodo(newTodos)
    }

    const deleteTodo = (id) =>{
        const newTodos = [...todos]
        const todoindex = newTodos.findIndex(todo => todo.id === id)
        newTodos.splice(todoindex, 1)
        saveTodo(newTodos)
    }

    return (
        {
            loading,
            error,
            completedTodos, 
            totalTodos, 
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            editTodo,
            deleteTodo,
            isOpen,
            setIsOpen,
            getTodo
        }    )
}

function newId(todoList){
    if(!todoList.length){
        return 1
    }

    const idList = todoList.map(todo => todo.id)
    const idMax = Math.max(...idList)
    return idMax + 1 
}

export {useTodos}
