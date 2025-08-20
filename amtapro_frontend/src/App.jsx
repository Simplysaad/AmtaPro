import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Lander from './Pages/Lander/Lander'
import News from './Pages/News/News';
import Footballers from './Pages/Footballers/Footballers'
import Academies from './Pages/Academies/Academies';
import Contact from './Pages/Contact/Contact';
import Support from './Pages/Support/Support';
import About from './Pages/About/About'
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import TermsOfService from './Pages/Terms Of Service/TermsOfService';
import PrivacyPolicy from './Pages/Privacy Policy/PrivacyPolicy';
import ForgotPassword from './Pages/Forgot Password/ForgotPassword'
import Team from './Pages/Team/Team';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lander />}></Route>
        <Route path="/*" element={<Lander />}></Route>
        <Route path="/news" element={<News />}></Route>
        {/* <Route path="/footballers" element={<Footballers />}></Route>
        <Route path="/academies" element={<Academies />}></Route> */}
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/support" element={<Support />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/auth/login" element={<Login />}></Route>
        <Route path="/auth/register" element={<SignUp />}></Route>
        <Route path="/auth/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/terms-of-service" element={<TermsOfService />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
