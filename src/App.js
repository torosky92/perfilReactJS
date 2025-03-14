import React, { useRef, useState, useEffect } from "react";
import "./styles/App.css";

import WhatsAppWidget from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

import { translations, languagesWhatsapp } from "./components/data.jsx"; 

import Skills from "./components/Skills/Skills.jsx";
import ExperienceEducation from "./components/ExperienceAndEducation/ExperienceAndEducation.jsx";
import Certifications from "./components/Certification/Certification.jsx";
import AboutMe from "./components/AboutMe/AboutMe.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Home from "./components/Home/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Contact from "./components/Contact/Contact.jsx";

function App() {
  const sections = {
    inicio: useRef(null),
    proyectos: useRef(null),
    acercaDeMi: {
      acercaDeMi: useRef(null),
      habilidades: useRef(null),
      experiencia: useRef(null),
      certificados: useRef(null),
    },
    contacto: useRef(null),
  };
  
  const [language, setLanguage] = useState(localStorage.getItem("language") || "es");

  // 📌 Estado para cambiar idioma
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <div>
      {/* 🔹 Barra de Navegación */}
      <Navbar 
        sections={sections} toggleLanguage={() => setLanguage(language === "es" ? "en" : "es")}
        translations={translations} language={language}/> 

      {/* 🔹 Sección Inicio */}
      <section ref={sections.inicio} id="inicio" className="section home">
        <Home translations={translations} language={language}/>
      </section>

      {/* 🔹 Proyectos */}
      <section ref={sections.proyectos} id="proyectos" className="section projects">
        <Projects translations={translations} language={language}/>
      </section>

      {/* 🔹 Acerca de Mi */}
      <section ref={sections.acercaDeMi.acercaDeMi} id="acercaDeMi" className="section aboutme">
        <AboutMe translations={translations} language={language}/>
      </section>

      {/* 🔹 Experiencia & Estudios */}
      <section ref={sections.acercaDeMi.experiencia} id="experiencia" className="section experience">
        <ExperienceEducation translations={translations} language={language}/>
      </section>

      {/* 🔹 Habilidades */}
      <section ref={sections.acercaDeMi.habilidades} id="habilidades" className="section skills">
        <Skills translations={translations} language={language}/>
      </section>

      {/* 🔹 Certificados */}
      <section ref={sections.acercaDeMi.certificados} id="certificados" className="section certifications">
        <Certifications translations={translations} language={language}/>
      </section>

      {/* 🔹 Contacto */}
      <section ref={sections.contacto} id="contacto" className="section contact">
        <Contact translations={translations} language={language}/>
      </section>

      <WhatsAppWidget 
        phoneNumber={languagesWhatsapp.Whatsapp} 
        textReplyTime="" 
        companyName={language === 'es' ? languagesWhatsapp.Spanish.company : languagesWhatsapp.English.company} 
        sendButton={language === 'es' ? languagesWhatsapp.Spanish.send : languagesWhatsapp.English.send} 
        message={language === 'es' ? languagesWhatsapp.Spanish.text : languagesWhatsapp.English.text}
      />
    </div>
  );
}

export default App;