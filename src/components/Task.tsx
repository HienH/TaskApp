export interface TaskProps {
    id: number;
    text: string;
    day: string;
    reminder: boolean;
}
 
const Task = (task:TaskProps) => {
    return (  
        <div className="task">
            <h3>
                {task.text}
            </h3>
            <p>{task.day}</p>

        </div>
    );
}
 
export default Task;