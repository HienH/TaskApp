
import React from 'react';
import { ITask } from '../models/Task';
import Task from './Task';
export type TasksProps = {
    tasks: ITask[];
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
}


const Tasks = ({tasks, onDelete, onToggle}: TasksProps) => {
    return (
        <div>
            {tasks.map(task => (
                <Task key={task.id} onDelete={onDelete} task={task} onToggle={onToggle}/>
            ))}
        </div>
    )
};
 
export default Tasks;