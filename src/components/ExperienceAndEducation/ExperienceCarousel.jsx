import React, { useState } from "react";
import "./ExperienceCarousel.css";

const ExperienceCarousel = props => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 1; // Cantidad de elementos visibles al mismo tiempo

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
          {props.cards.slice(currentIndex, currentIndex + itemsPerPage).map((job, index) => (
            <div className="experience-card" key={index}>
              <h3>{job.Company}</h3>
              <h4>{props.language === 'en' ? job.Role.English : job.Role.Spanish}</h4>
              <h4>{job.Places}</h4>
              <p className="date">
                  {job.DateInitial.year} - {job.DateFinal.year === 0 ? "Presente" : job.DateFinal.year}
              </p>
              <p className="description">{props.language === 'en' ? job.Description.English : job.Description.Spanish}</p>
              {/* Iconos en filas de a 4 */}
              {job.icons && job.icons.props && job.icons.props.children ? (
                  <ul className="icons-container">
                      {React.Children.map(job.icons.props.children, (icon, i) => (
                          <li key={i} className="icon">{icon}</li>
                      ))}
                  </ul>
              ) : null}
            </div>
          ))}
        </div>
        <button className="carousel-button right" onClick={nextSlide}>›</button>
      </div>
    );
};

export default ExperienceCarousel;