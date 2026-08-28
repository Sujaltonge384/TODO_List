import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") {
      return;
    }

    const task = {
      id: Date.now(),
      text: newTask.trim(),
      completed: false,
    };

    setTasks([...tasks, task]);
    setNewTask("");
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, newText) => {
    if (newText.trim() === "") {
      return;
    }

    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, text: newText.trim() }
          : task
      )
    );
  };

  return (
    <div className="app">
      <Header />

      <main className="todo-container">
        <div className="add-task">
          <input
            type="text"
            placeholder="Enter a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTask();
              }
            }}
          />

          <button onClick={addTask}>Add Task</button>
        </div>

        <ToDoList
          tasks={tasks}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      </main>
    </div>
  );
}

export default App;