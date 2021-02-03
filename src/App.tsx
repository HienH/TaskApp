import './App.css';
import React, {useState} from 'react';
import Header from './components/Header';
import Tasks, { TasksProps } from './components/Tasks';
import { TaskProps } from './components/Task';
import { ITask } from './models/Task';

const App = () => {
  const [tasks, setTasks] =  React.useState<ITask[]>(
      [
          {
            id: 1,
            text: "Doctors Appointment",
            day: "Feb 5th at 2:30pm",
            reminder: true
          }, 
          {
            id: 2,
            text: "Doctors Appointment",
            day: "Feb 5th at 2:30pm",
            reminder: true
          },

    ]);

    const deleteTask = (id: number) => {
        console.log('Delete Task', id)
    }

  return (
    <div className="container">
      <Header title={"Task App"}/>
      <Tasks tasks={tasks} onDelete={deleteTask}/> 
    </div>
  );
}

export default App;
