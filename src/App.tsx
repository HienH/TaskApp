import './App.css';
import React, {useState} from 'react';
import Header from './components/Header';
import Tasks, { TasksProps } from './components/Tasks';
import { TaskProps } from './components/Task';
import { ITask } from './models/Task';
import AddTask from './components/AddTask';

const App = () => {
    const [showAddForm, setShowAddForm] = useState(false);
    const [tasks, setTasks] =  React.useState<ITask[]>(
        [
            {
                id: 1,
                text: "Doctors Appointment",
                date: "Feb 5th at 2:30pm",
                reminder: true
            }, 
            {
                id: 2,
                text: "Doctors Appointment",
                date: "Feb 5th at 2:30pm",
                reminder: true
            },

        ]);

    const toggleRemider = (id: number) => {
        setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task ))
    }

    const deleteTask = (id: number) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const addTask = (task: ITask) => {
        setTasks([...tasks, task])
    }

  return (
    <div className="container">
      <Header title={"Task App"} onButtonClick={() => setShowAddForm(!showAddForm)} showAdd={showAddForm}/>
        {showAddForm && <AddTask onAdd={addTask}/>}
        { tasks.length > 0 ?
            <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemider} /> :
            <p>No tasks</p>} 
    </div>
  );
}

export default App;
