import { useState } from 'react'
import { Alert } from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header>
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
      </header>
    </div>
  )
}

export default App
