import React, { useState } from 'react'
import '../styles/App.css';

function ToDo({todold,createdAt}) {
  return (<tr>
    <td>
      <p>{todoold}</p>
    </td>
    <td>
      <input placeholder = "Enter task here" />
    </td>
    <td>
      <p>{createdAt}</p>
    </td>
  </tr>)
}

function App() {
  const [todos, setTodos] = useState([{
    id: 'todo1',
    createdAt: '20:30',
  }, {
    id: 'todo2',
    createdAt: '18:00',
  }
  ]);
  const reverseOrder = () =>{
    setTodos((prevTodos) =>
             [...prevTodos].reverse());
  };

  return (
    <div id="main">
      <button on click = {reverseOrder}>Reverse</button>
      <table>
        <tbody>
    {todos.map(({id,createdAt}) =>(
      <ToDo key ={id} todold
={id}
createdAt={ createdAt}/>
  </tbody>
      </table>
    </div>
  );
};


export default App;
