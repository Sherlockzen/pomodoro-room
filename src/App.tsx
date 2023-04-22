import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className=' bg-slate-500 h-screen w-screen flex flex-col justify-center items-center'>
      <div>
        <h1>Temos aqui algo pra colocar</h1>
        <button 
        onClick={ () => setCount(count + 1)}
        className="btn btn-accent">Contador: {count}</button>
      </div>
    </div>

  )
}

export default App