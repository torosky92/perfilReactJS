import React, { useState, useEffect } from "react"
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './component/Navbar'
import Footer from "./component/Footer"
import HomeProcess from './component/home.jsx'
import SkillsProcess from './component/skills.jsx'
import ExperienceProcess from './component/experience.jsx'
import AboutMeProcess from './component/aboutme.jsx'
import {languagesWhatsapp} from './component/js/data'
import {HomeInformation} from './component/js/home'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'
window.localStorage.setItem('languages', 'ENGLISH')
function App() {
  const [languages, setlanguages] = useState(localStorage.getItem('languages'))
    useEffect(() => {
        window.addEventListener('change', () => {
            setlanguages(window.localStorage.getItem('languages'))
        })
    }, [])
  return (
    <BrowserRouter>
      <div className="Container">
        <Navbar/>
        <Routes>
          <Route exact path="/perfilReactJS/Skill" element={<SkillsProcess languages={languages} />}/>
          <Route exact path="/perfilReactJS/Experience" element={<ExperienceProcess languages={languages} />}/>
          <Route exact path="/perfilReactJS/AboutMe" element={<AboutMeProcess languages={languages} />}/>
          <Route exact path="/perfilReactJS" element={<HomeProcess languages={languages} whatsapp={<WhatsAppWidget phoneNumber={HomeInformation.Whatsapp} textReplyTime="" companyName={languages === 'SPANISH' ? languagesWhatsapp.Spanish.company : languagesWhatsapp.English.company} sendButton={languages === 'SPANISH' ? languagesWhatsapp.Spanish.send : languagesWhatsapp.English.send} message={languages === 'SPANISH' ? languagesWhatsapp.Spanish.text : languagesWhatsapp.English.text}/>}/>}/>
        </Routes>
        
        <Footer/>
      </div>
    </BrowserRouter>
  );
}
export default App;