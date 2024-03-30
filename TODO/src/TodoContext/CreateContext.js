import {useState, createContext} from "react";
import { useLocalStorage } from "./useLocalStogare";

const TodoContext = createContext()

function TodoProvider ({children}){
    
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
        const newTodos = [...todos]
        newTodos.push({
            text,
            completed: false
        })
        saveTodo(newTodos)
    }

    const completeTodo = (text) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(todo => todo.text === text)
        newTodos[todoIndex].completed = true
        saveTodo(newTodos)
    }

    const deleteTodo = (text) =>{
        const newTodos = [...todos]
        const todoindex = newTodos.findIndex(todo => todo.text === text)
        newTodos.splice(todoindex, 1)
        saveTodo(newTodos)
    }

    return (
        <TodoContext.Provider value={{// exponer las propiedades de una forma global
            loading,
            error,
            completedTodos, 
            totalTodos, 
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            isOpen,
            setIsOpen,
        }}>
            {children}
        </TodoContext.Provider>

    )
}

export {TodoContext,TodoProvider}


// const defaultTodos = [
//   {text: 'cortarme el pelo', completed: true},
//   {text: 'desayunar', completed: true},
//   {text: 'Estudiar React', completed: true},
//   {text: 'ir a la universidad', completed: false},
//   {text: 'Ir a cine', completed: false}
// ]

