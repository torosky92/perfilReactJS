import React, { useState } from "react";
import { Developments } from "./data/data.jsx";
import "./Projects.css";

const Projects = ({ translations, language }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [flipping, setFlipping] = useState(""); // Estado para animación

    const nextProject = (isPage=true) => {
        if (isPage === true){
            setFlipping("flip-right"); // Solo mueve right-page
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % Developments.length);
                setFlipping("");
            }, 500); // Tiempo de la animación
        } else {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % Developments.length);
        }
    };

    const prevProject = (isPage=true) => {
        if (isPage === true) {
            setFlipping("flip-left"); // Solo mueve left-page
            setTimeout(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === 0 ? Developments.length - 1 : prevIndex - 1
                );
                setFlipping("");
            }, 500); // Tiempo de la animación
        } else {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? Developments.length - 1 : prevIndex - 1
            );
        }
    };

    return (
        <div className="projects-container">
            <div className="magazine-container">
                <div className="magazine">
                    
                    {/* Lado Izquierdo (Texto y Tecnologías) */}
                    <div className={`page left-page ${flipping === "flip-left" ? "flip-left-anim" : ""}`}>
                        <div className="content">
                            <h3>{language === 'en' ? Developments[currentIndex].title.English : Developments[currentIndex].title.Spanish}</h3>
                            <p>{Developments[currentIndex].DateInitial.year}</p>
                            {Developments[currentIndex].description && 
                                <p className="cursive">
                                    {language === 'en' ? Developments[currentIndex].description.English : Developments[currentIndex].description.Spanish}
                                </p>}
                        </div>
                    </div>

                    {/* Lado Derecho (Imagen o Video) */}
                    <div className={`page right-page ${flipping === "flip-right" ? "flip-right-anim" : ""}`}>
                        <div className="row">
                            <div className="project-image">
                                {Developments[currentIndex].img}
                            </div>
                            <div className="col-sm-12 mt-3">
                                {Developments[currentIndex].link}
                            </div>
                        </div>
                        <ul className="project-icons">
                            {Developments[currentIndex].icons}
                        </ul>
                        <h5 className="number-page mt-2">{Number(currentIndex)+1}</h5>
                    </div>
                </div>
            </div>

            <div className="row container">
                <button className="prev-page" onClick={() => prevProject(true)}>‹ Pagina Anterior</button>
                <button className="next-page" onClick={() => nextProject(true)}>Siguiente Pagina ›</button>
            </div>

            <h5 className="cursive mt-1">{translations[language]['proyectos_mensaje']}</h5>
        </div>
    );
}

export default Projects;