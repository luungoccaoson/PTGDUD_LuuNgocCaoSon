import { useState } from 'react'
import './bai5.css'

function bai5() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState(['Chơi game', 'Học bài', 'Đá banh']);

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <div className="task-input">
        <input type="text" value={task} onChange={handleTaskChange} placeholder="Nhập công việc..." />
        <button onClick={addTask}>Thêm</button>
      </div>
      <ul>
        {tasks.map((t, index) => (
          <li key={index} className="task-item">
            {t} <button onClick={() => removeTask(index)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default bai5
