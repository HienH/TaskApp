import { FaTimes } from 'react-icons/fa';
import { ITask } from '../models/Task';

//MAKE TO CLASS
// export interface TaskProps {
//     onDelete: (id:number) => void;
//     id: number;
//     text: string;
//     day: string;
//     reminder: boolean;
// }
 
export interface TaskProps {
    task: ITask;
    onDelete: (id:number) => void
}
const Task = ({task, onDelete}:TaskProps) => {
    const {text, day, id} = task
    return (  
        <div className="task">
            <h3>
                {text}
                <FaTimes style={{color:'red', cursor: 'pointer'}} onClick={()=> onDelete(id)}/>
            </h3>
            <p>{day}</p>

        </div>
    );
}
 
export default Task;