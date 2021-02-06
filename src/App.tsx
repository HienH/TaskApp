import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { ITask } from "./models/Task";
import AddTask from "./components/AddTask";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./components/About";
const App = () => {
  const API_URL = "http://localhost:5000/tasks";
  const [showAddForm, setShowAddForm] = useState(false);
  const [tasks, setTasks] = React.useState<ITask[]>([]);

  useEffect(() => {
    getAllTask();
  }, []);

  const getAllTask = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setTasks(data);
  };

  const getTask = async (id: number) => {
    const res = await fetch(API_URL + `/${id}`);
    return await res.json();
  };

  const toggleRemider = async (id: number) => {
    const taskToUpdate = await getTask(id);
    const updatedTask = { ...taskToUpdate, reminder: !taskToUpdate.reminder };

    const req = await fetch(API_URL + `/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });

    const res = await req.json();
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: res.reminder } : task
      )
    );
  };

  const deleteTask = async (id: number) => {
    await fetch(API_URL + `/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = async (task: ITask) => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTasks([...tasks, data]);
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Header
          title={"Task App"}
          onButtonClick={() => setShowAddForm(!showAddForm)}
          showAdd={showAddForm}
        />
        <Route
          path="/"
          exact
          render={() => (
            <>
              {showAddForm && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleRemider}
                />
              ) : (
                <p>No tasks</p>
              )}
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
