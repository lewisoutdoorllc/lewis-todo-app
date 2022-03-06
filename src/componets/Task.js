import React, { useState } from 'react'
import Check from '../images/icon-check.svg';

function Task({ text, task }) {

    const [mutableTask, setMutableTask] = useState(task);
    const checked = mutableTask.status ? 'checked' : '';
    const checkIcon = mutableTask.status ? (<img src={Check} alt="check" />) : '';


    const markCompleted = () => {
        // console.log(mutableTask);
        setMutableTask({ ...mutableTask, status: !mutableTask.status });
        console.log(mutableTask);
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