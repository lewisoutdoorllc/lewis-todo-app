import React, { useState } from 'react'

function TaskInput({ tasks, setTasks, theme }) {

    const [input, setInput] = useState('');

    const handleChange = (e) => {
        // console.log(e);
        // console.log(e.target.value);
        setInput(e.target.value);
    }

    const handleForm = (e) => {
        e.preventDefault();

        if (input.trim()) {
            const newTask = {
                id: tasks.length + 1,
                text: input,
                status: false
            }
            setTasks([newTask, ...tasks]);
        }
    }



    return (
        <div className={`task-input ${theme}`}>
            <div className="check">
                <div className="check-mark">

                </div>
            </div>
            <div className={`new-todo-input ${theme}`}>
                {/* <form onSubmit={}> */}
                <form onSubmit={handleForm}>
                    <input onChange={handleChange} id="todo-input" type="text" placeholder="Create a new task..." />
                </form>
            </div>
        </div>
    )
}

export default TaskInput