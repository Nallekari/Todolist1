import React from 'react';

function TodoList(props) {

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
              </tr>
          )
        }
      </tbody>
    </table>
    </div>
  );
};

export default TodoList;