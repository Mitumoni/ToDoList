
import './App.css';
import { useState } from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import ShowList from './Components/ShowList';

function App() {
  const [input, setInput] = useState(' ')
  const [tasks, setTasks] = useState([])
  const [editTodo, setEditTask] = useState("")

  return (
    <div  className="App mx-64 rounded-md space-y-11 mt-40 p-2">
      
        <Header/>
        <Form input={input} setInput={setInput} tasks={tasks} setTasks={setTasks} editTodo={editTodo} setEditTask={setEditTask}/>
        <ShowList  input={input} setInput={setInput} tasks={tasks} setTasks={setTasks} editTodo={editTodo} setEditTask={setEditTask}/>
    </div>
  );
}

export default App;
