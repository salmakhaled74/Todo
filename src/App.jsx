import { useState } from "react";
import Form from "./components/from";
import "./index.css";
import Task from "./components/task";
import NavBar from "./components/NavBar";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  return (
    <>
      <NavBar />
      <Form addTask={addTask} />
      <navBar />
      <Task tasks={tasks} />
    </>
  );
}

export default App;
