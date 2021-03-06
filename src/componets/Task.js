import React, { useState } from 'react'
import Check from '../images/icon-check.svg';
import Cross from '../images/icon-cross.svg';
// import { Draggable } from "react-beautiful-dnd";


function Task({ text, task, tasks, setTasks, theme }) {

    const [mutableTask, setMutableTask] = useState(task);

    const checked = mutableTask.status ? 'checked' : '';
    const checkIcon = mutableTask.status ? (<img src={Check} alt="check" />) : '';

    const clearSingleTask = () => {
        // console.log(task)
        setTasks(tasks.filter(task => task.id !== mutableTask.id));
    }

    const markCompleted = () => {
        // console.log(tasks);
        setMutableTask({ ...mutableTask, status: !mutableTask.status });

        const updatedTasks = tasks.map((item) => {
            // console.log(item)
            return task.id === item.id ? { ...item, status: !item.status } : item;
        })
        setTasks(updatedTasks);
    }

    return (
        // <Draggable>
        <div className="task-item">
            <div className="check" onClick={markCompleted}>
                <div className={`check-mark ${checked}`}>
                    {checkIcon}
                </div>
            </div>

            <div className={`task-text ${checked} ${theme}`}>
                <p>{text}</p>
            </div>
            <div className="remove-cross">
                <img src={Cross} alt="cross" onClick={clearSingleTask} />
            </div>
        </div>
        // </Draggable>
    )
}

export default Task