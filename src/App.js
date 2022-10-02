import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList'

function App() {
  const [todo, setTodo] = useState({desc: '', date: ''});
  const [todos, setTodos] = useState([]);


  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value });
  }

  return (
    <div className="App">
      <p>Add todo:</p>
      <form onSubmit={addTodo}>  
        Description:<input type="text" name="desc" value={todo.desc} onChange={inputChanged} />
        Date:<input type="text" name="date" value={todo.date} onChange={inputChanged}/>
          <input type="submit" value="Add"/>
      </form>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
