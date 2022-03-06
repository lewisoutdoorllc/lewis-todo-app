import React from 'react'
import FilterCotrol from './FilterCotrol'
import Task from './Task'

function TaskList({ tasks, setTasks }) {

    const clearCompleted = () => {
        setTasks(tasks.filter(task => task.status === true));        
    }

    return (
        <div className="task-list-wrapper">
            <div className="task-list">
                {tasks.map((task) => {
                    // console.log(task);
                    return <Task
                        key={task.id}
                        text={task.text}
                        status={task.status}
                        tasks={tasks}
                        task={task}
                        setTasks={setTasks}
                        // setFilterStatus={setFilterStatus}
                    />
                })}
            </div>
            <div className="task-items-info">
                <div className="items-left">
                    5 items left
                </div>
                <FilterCotrol />
                <div className="items-clear" onClick={clearCompleted}>
                    <span>Clear Completed</span>
                </div>
            </div>
        </div>
    )
}

export default TaskList   