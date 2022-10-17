
import { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';

function App() {
  const [todos, setTodos] = useState([])

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {

        id: Math.random().toString(20).substring(4, 12),
        task: userInput,
        complete: false
      }
      setTodos([...todos, newItem])
    }
  }
  const removeTask = (id) => {
    setTodos([...todos.filter(todo => todo.id != id)])


  }

  const handlToggol = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      )
    ])
  }

  return (
    <div className="App">
      <header>
        <h1>спиоск задач: {todos.length}</h1>
      </header>
      <TodoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            toggleTask={handlToggol}
            removeTask={removeTask}
            key={todo.id} />
        )
      })}


    </div>
  );
}

export default App;
