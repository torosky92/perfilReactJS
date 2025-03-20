import React, { useState } from "react";

const CertificationAccordion = ({ cert, language }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`certification-accordion ${isOpen ? 'open' : ''}`}>
            <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
                <h3>
                    {language === 'en' ? cert.Title.English : cert.Title.Spanish} <span className="accordion-icon">{isOpen ? '▲' : '▼'}</span>
                </h3>
            </div>

            <div className="accordion-content">
                <h4>{language === 'en' ? cert.Campus.English : cert.Campus.Spanish}</h4>
                <h4>{cert.Places}</h4>
                <p className="date">{cert.DateInitial.year} - {cert.DateFinal.year}</p>

                {/* 🔹 Badges Carousel en móviles */}
                <div className="badges-container">
                    {cert.badges.map((badge, i) => (
                        <div key={i} className="badge-item">
                            <a href={badge.url} target="_blank" rel="noopener noreferrer">
                                {badge.icon}
                                <p>{badge.title}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            {cert.badges.length > 1 && <p className="swipe-overlay">⬅️ {language === 'en' ? 'Swipe to view more': 'Desliza para ver más'} ➡️</p>}
        </div>
    );
};

export default CertificationAccordion;
