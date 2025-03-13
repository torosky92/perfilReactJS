import React, { useState } from "react";
import "./SkillsCarousel.css";

const SkillsCarousel = props => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3; // Cantidad de elementos visibles al mismo tiempo

    // Función para avanzar el carrusel
    const nextSlide = () => {
        if (currentIndex + itemsPerPage < props.cards.length) {
        setCurrentIndex(currentIndex + 1);
        } else {
        setCurrentIndex(0); // Reinicia el carrusel al inicio
        }
    };

    // Función para retroceder el carrusel
    const prevSlide = () => {
        if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
        } else {
        setCurrentIndex(props.cards.length - itemsPerPage);
        }
    };
    return (
        <div className="carousel-container">
        <button className="carousel-button left" onClick={prevSlide}>‹</button>
        <div className="carousel-track">
          {props.cards.slice(currentIndex, currentIndex + itemsPerPage).map((item, index) => (
            <div className="skill-card" key={index}>
              {item.icons}
              <span>{item.language}</span>
              <small>{props.language === 'en' ? item.level.English : item.level.Spanish}</small>
            </div>
          ))}
        </div>
        <button className="carousel-button right" onClick={nextSlide}>›</button>
      </div>
    );
};

export default SkillsCarousel;