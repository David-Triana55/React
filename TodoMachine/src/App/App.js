import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStogare';


// const defaultTodos = [
//   {text: 'cortarme el pelo', completed: true},
//   {text: 'desayunar', completed: true},
//   {text: 'Estudiar React', completed: true},
//   {text: 'ir a la universidad', completed: false},
//   {text: 'Ir a cine', completed: false}
// ]


function App() {

  const {
    item: todos,
    saveItem: saveTodo,
    loading,
    error
  } = useLocalStorage('todo', [])

  const [searchValue, setSearchValue] = React.useState('') // estado de TodoSearch

  let completedTodos = todos.filter(todo => !!todo.completed).length
  let totalTodos = todos.length

  let searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue))



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
    <AppUI
      loading={loading}
      error={error}
      completed={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
