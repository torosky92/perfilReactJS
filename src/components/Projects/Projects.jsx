import React, { useState } from "react";
import { Developments } from "./data/data.jsx";
import "./Projects.css";

const Projects = ({ translations, language }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [flipping, setFlipping] = useState(""); // Estado para animación

    const nextProject = () => {
        setFlipping("flip-right"); // Solo mueve right-page
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % Developments.length);
            setFlipping("");
        }, 500); // Tiempo de la animación
    };

    const prevProject = () => {
        setFlipping("flip-left"); // Solo mueve left-page
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? Developments.length - 1 : prevIndex - 1
            );
            setFlipping("");
        }, 500); // Tiempo de la animación
    };


    return (
        <div className="projects-container">
            <h5 className="cursive">{translations[language]['proyectos_mensaje']}</h5>
            <div className="magazine-container">
                <div className="magazine">
                    
                    {/* Lado Izquierdo (Texto y Tecnologías) */}
                    <div className={`page left-page ${flipping === "flip-left" ? "flip-left-anim" : ""}`}>
                        <div className="content">
                            <h3>{language === 'en' ? Developments[currentIndex].title.English : Developments[currentIndex].title.Spanish}</h3>
                            <p>{Developments[currentIndex].DateInitial.year}</p>
                            {Developments[currentIndex].description && <p className="cursive">{language === 'en' ? Developments[currentIndex].description.English : Developments[currentIndex].description.Spanish}</p>}
                            <ul className="project-icons">
                                {Developments[currentIndex].icons}
                            </ul>
                        </div>
                    </div>

                    {/* Lado Derecho (Imagen o Video) */}
                    <div className={`page right-page ${flipping === "flip-right" ? "flip-right-anim" : ""}`}>
                        <div className="row">
                            <div className="project-image col-sm-12">
                                {Developments[currentIndex].img}
                            </div>
                            <div className="col-sm-12">
                                {Developments[currentIndex].link}
                            </div>
                        </div>
                        <h5 className="number-page">{Number(currentIndex)+1}</h5>
                    </div>
                </div>

                {/* Botones de navegación */}
                <button className="prev-btn" onClick={prevProject}>❮</button>
                <button className="next-btn" onClick={nextProject}>❯</button>
            </div>
        </div>
    );
}

export default Projects;