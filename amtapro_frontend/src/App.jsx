import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import amta from '../src/assets/amta.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <h1>AmtaPro</h1>
          <div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
          <img class="size-12 shrink-0" src={amta} alt="ChitChat Logo" />
          <div>
            <div class="text-xl font-medium text-black dark:text-white">ChitChat</div>
            <p class="text-gray-500 dark:text-gray-400">You have a new message!</p>
          </div>
        </div>
        <h1 class="text-3xl font-bold underline">
          Hello world!
        </h1>
      </div>
    </>
  )
}

export default App
