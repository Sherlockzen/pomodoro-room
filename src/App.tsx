import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=" bg-slate-500 h-screen w-screen flex flex-col justify-center items-center">
      <div className=" bg-yellow-300 h-[calc(100vh-80px)] max-w-md w-full flex flex-col items-center justify-center border-2 border-red-600">
        <div className=" m-2 w-2/3 bg-green-300">algo</div>
      </div>
      
    </div>
  );
}

export default App