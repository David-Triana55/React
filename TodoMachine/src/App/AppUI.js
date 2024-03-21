import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";

export function AppUI({
    loading,
    error,
    completedTodos, 
    totalTodos, 
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}) {
    return (
        <>
            <TodoCounter 
                completed={completedTodos}  
                total={totalTodos} 
            /> {/*props */}

            <TodoSearch  
                searchValue={searchValue}
                setSearchValue={setSearchValue} 
            />        

            <TodoList>
                {loading && <p>Estamos Cargando</p>}
                {error && <p>Hubo un error</p>}
                {(!loading && searchedTodos.length === 0) && <p>Crea tu primer TODO!!</p>}

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
        </>
    )
}