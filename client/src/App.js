import './App.css';
import React, {useState, useEffect} from 'react';
import Axios from 'axios'

function App() {

  const handleSubmit = () => {
    Axios.post("http://localhost:3001/insert", {
      todoTitle: todo,
    });
  }

  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((response) => {
      setTodoList(response.data)
    });
  }, [])

  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <div>
      <h1>MERN TodoList</h1>
      <input type="text" onChange={e => setTodo(e.target.value)} />
      <button onClick={handleSubmit}>Add Todo</button>
      <h1>Data</h1>
      <ol>
        {todoList.map((todo, key) => {
          return <li key={key}>{todo.todoTitle} (Date Created: {todo.todoDate})</li>
        })}
      </ol>
    </div>
  );
}

export default App;