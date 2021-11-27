import React from 'react'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './component/Navbar'
import HomeProcess from './component/home.jsx'
import SkillsProcess from './component/skills.jsx'
import ExperienceProcess from './component/experience.jsx'
import AboutMeProcess from './component/aboutme.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"
window.localStorage.setItem('languajes', 'ENGLISH')
function App() {
  return (
    <BrowserRouter>
      <div className="Container">
        <Navbar/>
        <Routes>
          <Route exact path="/perfilReactJS/Skill" element={<SkillsProcess/>}/>
          <Route exact path="/perfilReactJS/Experience" element={<ExperienceProcess/>}/>
          <Route exact path="/perfilReactJS/AboutMe" element={<AboutMeProcess/>}/>
          <Route exact path="/perfilReactJS" element={<HomeProcess/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;