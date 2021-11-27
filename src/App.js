import React, { useState, useEffect } from "react"
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './component/Navbar'
import HomeProcess from './component/home.jsx'
import SkillsProcess from './component/skills.jsx'
import ExperienceProcess from './component/experience.jsx'
import AboutMeProcess from './component/aboutme.jsx'
import {languajesWhatsapp} from './component/js/data'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'
window.localStorage.setItem('languajes', 'ENGLISH')
function App() {
  const [languajes, setLanguajes] = useState(localStorage.getItem('languajes'))
    useEffect(() => {
        window.addEventListener('change', () => {
            setLanguajes(window.localStorage.getItem('languajes'))
        })
    }, [])
  return (
    <BrowserRouter>
      <div className="Container">
        <Navbar/>
        <Routes>
          <Route exact path="/perfilReactJS/Skill" element={<SkillsProcess languajes={languajes} Whatsapp={<WhatsAppWidget phoneNumber='573008850830' textReplyTime="" companyName={languajes === 'SPANISH' ? languajesWhatsapp.Spanish.company : languajesWhatsapp.English.company} sendButton={languajes === 'SPANISH' ? languajesWhatsapp.Spanish.send : languajesWhatsapp.English.send} message={languajes === 'SPANISH' ? languajesWhatsapp.Spanish.text : languajesWhatsapp.English.text}/>}/>}/>
          <Route exact path="/perfilReactJS/Experience" element={<ExperienceProcess languajes={languajes} Whatsapp={<WhatsAppWidget phoneNumber='573008850830' textReplyTime="" companyName={languajes === 'SPANISH' ? languajesWhatsapp.Spanish.company : languajesWhatsapp.English.company} sendButton={languajes === 'SPANISH' ? languajesWhatsapp.Spanish.send : languajesWhatsapp.English.send} message={languajes === 'SPANISH' ? languajesWhatsapp.Spanish.text : languajesWhatsapp.English.text}/>}/>}/>
          <Route exact path="/perfilReactJS/AboutMe" element={<AboutMeProcess languajes={languajes} Whatsapp={<WhatsAppWidget phoneNumber='573008850830' textReplyTime="" companyName={languajes === 'SPANISH' ? languajesWhatsapp.Spanish.company : languajesWhatsapp.English.company} sendButton={languajes === 'SPANISH' ? languajesWhatsapp.Spanish.send : languajesWhatsapp.English.send} message={languajes === 'SPANISH' ? languajesWhatsapp.Spanish.text : languajesWhatsapp.English.text}/>}/>}/>
          <Route exact path="/perfilReactJS" element={<HomeProcess languajes={languajes} Whatsapp={<WhatsAppWidget phoneNumber='573008850830' textReplyTime="" companyName={languajes === 'SPANISH' ? languajesWhatsapp.Spanish.company : languajesWhatsapp.English.company} sendButton={languajes === 'SPANISH' ? languajesWhatsapp.Spanish.send : languajesWhatsapp.English.send} message={languajes === 'SPANISH' ? languajesWhatsapp.Spanish.text : languajesWhatsapp.English.text}/>}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;