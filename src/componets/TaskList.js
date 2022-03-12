import React from 'react'
import FilterCotrol from './FilterCotrol'
import Task from './Task'

function TaskList({ tasks, setTasks, filterStatus, setFilterStatus, filteredTasks, theme }) {

    // console.log(tasks.length);
    // console.log(filteredTasks.length);
    const tasksLeft = filteredTasks.length;
    const clearCompleted = () => {
        setTasks(tasks.filter(task => task.status === false));
    }

    return (
        <div className={`task-list-wrapper ${theme}`}>
            <div className={`task-list ${theme}`}>
                {filteredTasks.map((task) => {
                    // console.log(task);
                    return <Task
                        key={task.id}
                        task={task}
                        text={task.text}
                        status={task.status}
                        tasks={tasks}
                        setTasks={setTasks}
                        theme={theme}
                    />
                })}
            </div>
            <div className={`task-items-info ${theme}`}>
                <div className="items-left">
                    <p><span>{tasksLeft}</span> items left</p>
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