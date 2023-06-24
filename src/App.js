import './App.css';
import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleChange = (e) => {
    if (e.target.checked) {
      let updatedList = taskList.filter((item) => item !== e.target.value)
      setTaskList(updatedList);
      setTimeout(() => {alert(`Task: ${e.target.value} Completed`)}, 100);
    }
  }

  const onSubmit = () => {
      setTaskList([...taskList, task]);
      setTask('');
  }

  return (
    <div className="App">
      <h1 className='heading'>TO-DO LIST</h1>
      <form>
        <input type="text" value={task} onChange={(e)=> setTask(e.target.value)} />
        <button type="button" onClick={onSubmit}>Add</button>
      </form>
      <div  className='tasks-div'>
        {taskList.map((item, index) =>
          <div key={index} className='task'>
            <input type='checkbox' key={index} value={item} name={item} className='checkbox' onChange={handleChange}/>
            <label htmlFor={item} key={item} >{item}</label><br />
          </div>
        )}
      </div>
    </div>
  );
}

export default App
