import React from 'react';

function TodoTable(props) {

    
  function deleteTodo(index) {
    props.todos.filter((todo, i) => i !== index)
  }

    return (
    <div>
        <table>
            <tr>
                <th>Date</th>
                <th>Description</th>
            </tr>
            <tbody>
                {
                props.todos.map((todo, index) =>
                    <tr key={index}>
                        <td>{todo.date}</td>
                        <td>{todo.desc}</td>
                        <button onClick={props.todos.filter((todo, i) => i !== index)}>Delete</button>
                    </tr>
                )
                }
            </tbody>
        </table>
        </div >
    );
} 
export default TodoTable;