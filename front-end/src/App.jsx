import { useState } from 'react'

import './App.css'
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-8">
      <button className="btn btn-primary">Button</button>
    </div>
  )
}

export default App
