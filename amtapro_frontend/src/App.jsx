import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Lander from './Lander/Lander'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lander />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
