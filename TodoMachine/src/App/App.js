import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { useLocalStorage } from './useLocalStogare';

// const defaultTodos = [
//   {text: 'cortarme el pelo', completed: true},
//   {text: 'desayunar', completed: true},
//   {text: 'Estudiar React', completed: true},
//   {text: 'ir a la universidad', completed: false},
//   {text: 'Ir a cine', completed: false}
// ]



function App() {

  const [todos, saveTodo] = useLocalStorage('todo', [])


  const [searchValue, setSearchValue] = React.useState('') // estado de TodoSearch
  console.log('useState ',searchValue);

  let completedTodos = todos.filter(todo => !!todo.completed).length
  let totalTodos = todos.length

  let searchTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue))



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
        {searchTodos.map(todo =>(
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
  );
}



export default App;
