import React, { useState } from 'react'
import Check from '../images/icon-check.svg';

function Task({ text, task, tasks, setTasks }) {

    const [mutableTask, setMutableTask] = useState(task);

    const checked = mutableTask.status ? 'checked' : '';
    const checkIcon = mutableTask.status ? (<img src={Check} alt="check" />) : '';


    const markCompleted = () => {
        // console.log(tasks);
        setMutableTask({ ...mutableTask, status: !mutableTask.status });

        const updatedTasks = tasks.map((item) => {
            console.log(item)
            return task.id === item.id ? { ...item, status: !item.status } : item;
        })
        setTasks(updatedTasks);
    }


    return (
        <div className="task-item">
            <div className="check" onClick={markCompleted}>
                <div className={`check-mark ${checked}`}>
                    {checkIcon}
                </div>
            </div>

            <div className={`task-text ${checked}`}>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Task