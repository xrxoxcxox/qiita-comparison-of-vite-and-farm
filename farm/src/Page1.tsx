import { useState } from 'react'
import './App.css'

function Page1() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Page 1</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default Page1
