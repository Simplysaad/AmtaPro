import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Lander from './Pages/Lander/Lander'
// import News from './Pages/News/News'
import Footballers from './Pages/Footballers/Footballers'
import Academies from './Pages/Academies/Academies';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lander />}></Route>
        {/* <Route path="/news" element={<News />}></Route> */}
        <Route path="/footballers" element={<Footballers />}></Route>
        <Route path="/academies" element={<Academies />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
