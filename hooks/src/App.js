import React from 'react';
import './App.css';

const useCounter = (valorInitial = 0) => {
  const [counter, setCounter] = React.useState(valorInitial)
  const increase = () => setCounter(counter + 1)
  const decrement = () => setCounter(counter - 1)
  const reset = () => setCounter(0)
  return{
    counter, increase, decrement, reset
  }
}

function App() {
  const counterA = useCounter(10)

  return (
    <>
      <div>{counterA.counter}</div>
      <button onClick={counterA.increase}>+</button>
      <button onClick={counterA.decrement}>-</button>
      <button onClick={counterA.reset}>zero</button>
    </>
  );
}

export default App;
