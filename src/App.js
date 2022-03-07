import './App.css';
import TaskInput from './componets/TaskInput';
import TaskList from './componets/TaskList';
import React, { useState, useEffect } from 'react';


const data = [
  { id: 1, text: "Finish contacts hw", status: false },
  { id: 2, text: "Study react hooks", status: false },
  { id: 3, text: "Finish Clever programmer challenge", status: false },
  { id: 4, text: "Run 1 mile", status: false },
  { id: 5, text: "Finish errands", status: false },
  { id: 6, text: "Complete Todo App", status: false },
];


function App() {

  const [tasks, setTasks] = useState(data);
  const [filteredTasks, setfilteredTasks] = useState(tasks)
  const [filterStatus, setFilterStatus] = useState('all');


  useEffect(() => {
    const handleFilter = () => {
      if (filterStatus === 'active') {
        setfilteredTasks(tasks.filter(task => task.status === false));
      }
      else if (filterStatus === 'completed') {
        setfilteredTasks(tasks.filter(task => task.status === true));
      }
      else {
        setfilteredTasks(tasks);
      }
    }
    handleFilter();
  }, [tasks, filterStatus]);


  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>TODO</h1>
          <img src='./images/icon-sun.svg' alt='logo' />
        </div>
        <TaskInput
          tasks={tasks}
          setTasks={setTasks}
        />
        <TaskList
          tasks={tasks}
          setTasks={setTasks}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
          filteredTasks={filteredTasks}
        />

      </div>
    </div>
  );
}

export default App;
