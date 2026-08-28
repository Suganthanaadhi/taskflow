import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])

  return (
    <div className="App">
      <h1>TaskFlow</h1>
      <ul id="task-list">
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  )
}

export default App