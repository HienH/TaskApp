import { useState } from 'react';
import { ITask } from '../models/Task';

export type AddTaskProps = {
    onAdd: (task: ITask) => void;
} 
const AddTask = ({onAdd}: AddTaskProps) => {
    const [text, setText] = useState('');
    const [date, setDate] = useState('');
    const [reminder, setReminder] = useState(false);
    
    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        if(!text ||! date){
            alert('Please fill out all Form');
            return;
        }  
        const id = Math.floor(Math.random() *1000) + 1;
        onAdd({id, text, date, reminder});

        // reset task form
        setText('');
        setDate('');
        setReminder(false);
    }
    return ( 
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' value={text} onChange={(e)=> setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Date</label>
                <input type='text' placeholder='Add Date and Time' value={date} onChange={(e) => setDate(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label>Reminder</label>
                <input
                    type='checkbox'
                    checked={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                 />
            </div>
            <input type='submit' value='Save Task' className='btn btn-block'/>
        </form>
     );
}
 
export default AddTask;