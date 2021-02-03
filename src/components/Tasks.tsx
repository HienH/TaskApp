import Task, {TaskProps} from './Task';

export type TasksProps = {
    tasks: TaskProps[];
}


const Tasks = ({tasks}: TasksProps) => {
    return (
        <div>
            {tasks.map(task => (
                <Task id={task.id} text={task.text} day={task.day} reminder={task.reminder}/>
            ))}
        </div>
    )
};
 
export default Tasks;