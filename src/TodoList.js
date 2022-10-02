import React, { useState } from 'react';
import TodoTable from './TodoTable'

function TodoList(props) {

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
    <div>
      <p>Add todo:</p>
      <form onSubmit={addTodo}>  
        Description:<input type="text" name="desc" value={todo.desc} onChange={inputChanged} />
        Date:<input type="text" name="date" value={todo.date} onChange={inputChanged}/>
        <input type="submit" value="Add"/>
      </form>
      <TodoTable todos={todos} />
    </div>
  );
};

export default TodoList;