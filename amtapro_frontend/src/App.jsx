import { useState } from 'react'
import amta from '../src/assets/amta.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <h1>AmtaPro</h1>
          <div class="mx-auto flex max-w-sm items-center gap-x-20 gap-y-10 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <img class="shrink-0 rounded-full size-20" src={amta} alt="ChitChat Logo" />
            <div>
              <div class="text-xl font-medium text-black dark:text-white">ChitChat</div>
              <p class="text-gray-500 dark:text-gray-400">You have a new message!</p>
            </div>
          </div>
          <h1 class="text-3xl font-bold underline">
            Hello world!
          </h1>
          <button class="bg-red-600 hover:bg-indigo-500">Tail button</button> <br />
          <button class="bg-red-600 hover:bg-indigo-500">Tailwind</button>
      </div>

      
        <div class="grid gap-x-5 gap-y-5 sm:grid-cols-2 grip-cols-3">
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
        </div>

        <div class="flex flex-col gap-2 p-8 xl:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
            <img class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src={amta} alt="" />
            <div class="space-y-2 text-center sm:text-left">
              <div class="space-y-0.5">
                <p class="text-lg font-semibold text-black">Erin Lindford</p>
                <p class="font-medium text-gray-500">Product Engineer</p>
              </div>
              <button class="border-purple-100 text-purple-600 hover:border-transparent hover:bg-purple-700 hover:text-white active:bg-purple-700 ...">
                Message
              </button>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-full px-5 py-8 ring shadow-xl ring-gray-900/5">
          <div>
            <span class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
              <svg
                class="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
              </svg>
            </span>
          </div>
          <button class="bg-[#316ff6] ...">
            Sign in with Facebook
          </button>
          <h3 class="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">Writes upside-down</h3>
          <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
            The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
          </p>
        </div>
        <a href="#" class="group rounded-lg p-8">
          {/* <!-- ... --> */}
          Hello!
          <span class="group-hover:underline">Read more…</span>
        </a>
    </>
  )
}

export default App
