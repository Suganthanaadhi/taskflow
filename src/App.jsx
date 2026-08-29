import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')

  const addTask = () => {
    if (input.trim() === '') return

    setTasks([...tasks, input])
    setInput('')
  }

  return (
    <div className="App">
      <h1>TaskFlow App</h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="New task..."
      />

      <button onClick={addTask}>Add Task</button>

      <ul id="task-list">
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  )
}

export default App