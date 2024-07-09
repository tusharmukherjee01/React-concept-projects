import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("yellow");

  return (
    <div
      className=" w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap gap-3 justify-center inset-x-0 buttom-auto px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full content-fit   font-semibold text-white"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full content-fit   text-white font-semibold"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full content-fit   text-white font-semibold"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full content-fit  text-white  font-semibold"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 py-1 rounded-full content-fit  text-white  font-semibold"
            style={{ backgroundColor: "orange" }}
          >
            orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App
