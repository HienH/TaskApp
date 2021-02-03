import './App.css';
import React, {useState} from 'react';
import Header from './components/Header';
import Tasks, { TasksProps } from './components/Tasks';
import { TaskProps } from './components/Task';

const App = () => {
  const [tasks, setTasks] =  React.useState<TaskProps[]>(
     
      [
          {
            id: 1,
            text: "Doctors Appointment",
            day: "Feb 5th at 2:30pm",
            reminder: true
          }, 
          {
            id: 1,
            text: "Doctors Appointment",
            day: "Feb 5th at 2:30pm",
            reminder: true
          },

      ]);

  return (
    <div className="container">
      <Header title={"Task App"}/>
      <Tasks tasks={tasks}/> 
    </div>
  );
}

export default App;
