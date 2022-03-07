import React from 'react'
import FilterCotrol from './FilterCotrol'
import Task from './Task'

function TaskList({ tasks, setTasks, filterStatus, setFilterStatus }) {

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
                        task={task}
                        text={task.text}
                        status={task.status}
                        tasks={tasks}
                        setTasks={setTasks}
                    />
                })}
            </div>
            <div className="task-items-info">
                <div className="items-left">
                    5 items left
                </div>
                <FilterCotrol
                    filterStatus={filterStatus}
                    setFilterStatus={setFilterStatus}
                />
                <div className="items-clear" onClick={clearCompleted}>
                    <span>Clear Completed</span>
                </div>
            </div>
        </div>
    )
}

export default TaskList   