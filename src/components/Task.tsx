import { FaTimes } from 'react-icons/fa';
import { ITask } from '../models/Task';
export interface TaskProps {
    task: ITask;
    onDelete: (id:number) => void;
    onToggle: (id:number) => void;
}

const Task = ({task, onDelete, onToggle}: TaskProps) => {
    const {text, date, id, reminder} = task
    return (  
        <div className={`task ${reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(id)}>
            <h3>
                {text}
                <FaTimes style={{color:'red', cursor: 'pointer'}} onClick={()=> onDelete(id)}/>
            </h3>
            <p>{date}</p>

        </div>
    );
}
 
export default Task;