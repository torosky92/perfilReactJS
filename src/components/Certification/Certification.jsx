import React from "react";
import { Course } from "./data/data.jsx";

const Certifications = props => {
    return (
        <div className="certifications-container">
            <h2>{props.translations[props.language]['certificados']}</h2>
            <div className="certifications-grid">
                {Course.map((cert, index) => (
                    <div key={index} className="certification-card">
                        <h3>{props.language === 'en' ?  cert.Title.English: cert.Title.Spanish}</h3>
                        <h4>{props.language === 'en' ?  cert.Campus.English: cert.Campus.Spanish}</h4>
                        <h4>{cert.Places}</h4>
                        <p className="date">
                            {cert.DateInitial.year} - {cert.DateFinal.year}
                        </p>

                        {/* 🔹 Badges organizados en filas de 3 */}
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
                ))}
            </div>
        </div>
    );
};

export default Certifications;