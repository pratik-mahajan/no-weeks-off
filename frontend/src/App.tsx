import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-full w-full flex-col items-center justify-center">
      <div className="flex-col flex items-center justify-center">
        <h1>Hello World</h1>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        <p>Count: {count}</p>
      </div>
    </div>
  )
}

export default App
