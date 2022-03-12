import './App.css';
import TaskInput from './componets/TaskInput';
import TaskList from './componets/TaskList';
import React, { useState, useEffect } from 'react';
import Sun from './images/icon-sun.svg';
import Moon from './images/icon-moon.svg';
import useLocalStorage from 'use-local-storage';


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
  // const [darkMode, setDarkMode] = useState(false);
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');


  // const darkModeIcon = <img src={Sun} alt='logo' />;
  // NEED TO STILL IMPLEMENT A DARK MODE
  const darkModeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }




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
    // <div className={`App ${theme}`} style={ theme === 'dark' ? {backgroundColor: 'red'} : {backgroundColor: 'orange'}}>
    <div className={`App ${theme}`}>
      <div className="container">
        <div className="header">
          <h1>TODO</h1>
          <div className="dark-mode" onClick={darkModeToggle}>
            <div>
              {theme === 'light' ? <img src={Sun} alt='logo' /> : <img src={Moon} alt='logo' />}
            </div>
          </div>
        </div>
        <TaskInput
          tasks={tasks}
          setTasks={setTasks}
          theme={theme}
        />
        <TaskList
          tasks={tasks}
          setTasks={setTasks}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
          filteredTasks={filteredTasks}
          theme={theme}
        />

      </div>
    </div>
  );
}

export default App;
