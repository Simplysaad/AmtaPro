import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Lander from './Pages/Lander/Lander'
import News from './Pages/News/News'
import Footballers from './Pages/Footballers/Footballers'




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lander />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/footballers" element={<Footballers />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
