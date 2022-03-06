import React, {useState} from 'react'

function Task({ text, task }) {

    const [mutableTask, setMutableTask] = useState(task);

    const markCompleted = () => {
        console.log(mutableTask.status);

        setMutableTask({...mutableTask, status: !mutableTask.status})

        const updatedTask = task.map((item) => {
            if (item.id === mutableTask.id) {
                return {...item, status: !item.status}
            }
            return item;
        })
        console.log(updatedTask);
    }

    return (
        <div className="task-item">
            <div className="check" onClick={markCompleted}>
                <div className="check-mark">

                </div>
            </div>

            <div className="task-text">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Task