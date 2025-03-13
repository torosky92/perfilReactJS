import React, { useRef, useState, useEffect } from "react";
import "./styles/App.css";

import WhatsAppWidget from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

import Skills from "./components/Skills/Skills.jsx";
import ExperienceEducation from "./components/ExperienceAndEducation/ExperienceAndEducation.jsx";
import Certifications from "./components/Certification/Certification.jsx";
import AboutMe from "./components/AboutMe/AboutMe.jsx";
import Projects from "./components/Projects/Projects.jsx";
import { translations, Contact, languagesWhatsapp } from "./components/data.jsx"; 

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
  const submenuRef = useRef(null);
  const [activeSection, setActiveSection] = useState("inicio");
  const [submitted, setSubmitted] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [language, setLanguage] = useState(localStorage.getItem("language") || "es");

  const handleSubmit = async (event) => {
      event.preventDefault();
      const form = event.target;

      const formData = new FormData(form);
      const response = await fetch("https://formspree.io/f/mkgjnydd", {
          method: "POST",
          body: formData,
          headers: { "Accept": "application/json" }
      });

      if (response.ok) {
          setSubmitted(true);
          form.reset();
      }
  };

  // 📌 Estado para cambiar idioma

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 60,
      behavior: "smooth",
    });
  };

  // 📌 **Detectar la sección activa usando Intersection Observer**
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // Detecta cuando el 50% de la sección está visible
      threshold: 0,
    };
    console.log(observerOptions)

    const observer = new IntersectionObserver((entries) => {
      console.log(entries)
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    Object.values(sections).forEach((section) => {
      if (section.current) {
        observer.observe(section.current);
      } else if (typeof section === "object") {
        Object.values(section).forEach((subSection) => {
          if (subSection.current) observer.observe(subSection.current);
        });
      }
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 📌 Cerrar submenú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        setSubmenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* 🔹 Barra de Navegación */}
      <nav className="navbar">
        <button
          onClick={() => scrollToSection(sections.inicio)}
          className={`logo ${activeSection === "inicio" ? "active" : ""}`}
        >DAVID TORO</button>
        <ul className="nav-links">
          <li>
            <button 
              onClick={() => scrollToSection(sections.proyectos)}
              className={activeSection === "proyectos" ? "active" : ""}
            >
              {translations[language]["proyectos"]}
            </button>
          </li>

          {/* 🔹 Submenú "Acerca de mí" */}
          <li className="submenu" ref={submenuRef}>
            <button 
              onMouseEnter={() => setSubmenuOpen(true)}
              className={
                ["acercaDeMi", "habilidades", "experiencia", "certificados"].includes(activeSection)
                  ? "active"
                  : ""
              }
            >
              {translations[language]["acerca_de_mi"]}
            </button>
            {submenuOpen && (
              <ul className="submenu-content">
                <li>
                  <button 
                    onClick={() => scrollToSection(sections.acercaDeMi.acercaDeMi)}
                    className={activeSection === "acercaDeMi" ? "active" : ""}
                  >
                    {translations[language]["acerca_de_mi"]}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection(sections.acercaDeMi.experiencia)}
                    className={activeSection === "experiencia" ? "active" : ""}
                  >
                    {translations[language]["experiencia"]}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection(sections.acercaDeMi.habilidades)}
                    className={activeSection === "habilidades" ? "active" : ""}
                  >
                    {translations[language]["habilidades"]}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection(sections.acercaDeMi.certificados)}
                    className={activeSection === "certificados" ? "active" : ""}
                  >
                    {translations[language]["certificados"]}
                  </button>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button 
              onClick={() => scrollToSection(sections.contacto)}
              className={activeSection === "contacto" ? "active" : ""}
            >
              {translations[language]["contacto"]}
            </button>
          </li>
          <li>
            <button onClick={toggleLanguage}>
            {language === "es" ? "Idiomas" : "Languages"} - {language === "es" ? "EN" : "ES"}
            </button>
          </li>
        </ul>
      </nav>

      {/* 🔹 Sección Inicio */}
      <section ref={sections.inicio} id="inicio" className="section home">
        <h1>{translations[language]['descripcion']}</h1>
        <h3>{translations[language]['lema']}</h3>
        <h3 className="cursive">{translations[language]['mensaje']}</h3>
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
        {submitted ? (
          <p className="success-message">{translations[language]['enviado']}</p>
        ) : (
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder={translations[language]['nombre_placeholder']} required />
                <input type="email" name="email" placeholder={translations[language]['email_placeholder']} required />
                <textarea name="message" placeholder={translations[language]['mensaje_placeholder']} required></textarea>
                <button type="submit">{translations[language]['enviar']}</button>
            </form>
        )}
        <div className="links-container">
          {Contact.map((dato) => <div className="links-item">
              <a className="links-contact" href={dato.text} target="_blank" rel="noreferrer" >
                {dato.icon}
              </a>
            </div>
          )}
        </div>
        <WhatsAppWidget 
          phoneNumber={languagesWhatsapp.Whatsapp} 
          textReplyTime="" 
          companyName={language === 'es' ? languagesWhatsapp.Spanish.company : languagesWhatsapp.English.company} 
          sendButton={language === 'es' ? languagesWhatsapp.Spanish.send : languagesWhatsapp.English.send} 
          message={language === 'es' ? languagesWhatsapp.Spanish.text : languagesWhatsapp.English.text}
        />
      </section>
      
    </div>
  );
}

export default App;