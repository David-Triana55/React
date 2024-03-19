import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';

const defaultTodos = [
  {text: 'cortarme el pelo', completed: true},
  {text: 'desayunar', completed: true},
  {text: 'Estudiar React', completed: true},
  {text: 'ir a la universidad', completed: false},
  {text: 'Ir a cine', completed: false}

]

function App() {

  const [todos, setTodos] = React.useState(defaultTodos) // estado de TodoItem
  const [searchValue, setSearchValue] = React.useState('') // estado de TodoSearch
  console.log('useState ',searchValue);

  let completedTodos = todos.filter(todo => !!todo.completed).length
  let totalTodos = todos.length


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
        {defaultTodos.map(todo =>(
          <TodoItem 
            key={todo.text}   
            text={todo.text} 
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

    </>
  );
}



export default App;
