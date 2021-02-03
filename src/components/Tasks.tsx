import Task, {TaskProps} from './Task';

const Tasks = (allTasks: TaskProps[]) => {
    return (
        <div>
            {allTasks.map(task => (
                <Task id={task.id} text={task.text} day={task.day} reminder={task.reminder}/>
            ))}
        </div>
    )
};
 
export default Tasks;