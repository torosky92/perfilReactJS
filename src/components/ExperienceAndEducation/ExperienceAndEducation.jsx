import React from "react";
import { ExperienceAndEducation } from "./data/data.jsx";
import ExperienceCarousel from "./ExperienceCarousel.jsx";

const ExperienceEducation = props => {
    return (
        <div className="experience-education-container">
            {/* 🔹 Experiencia */}
            <ExperienceCarousel cards={ExperienceAndEducation.Experience} language={props.language} />

            <div className="education-section container">
                {/* 🔹 Educación */}
                <h2>{props.language === 'en' ? 'Education' : 'Educación'}</h2>
                <div className="education-grid">
                    {ExperienceAndEducation.Education.map((edu, index) => (
                        <div key={index} className="education-card">
                            <h3>{props.language === 'en' ? edu.Title.English : edu.Title.Spanish}</h3>
                            <h4>{props.language === 'en' ? edu.Campus.English : edu.Campus.Spanish}</h4>
                            <h4>{edu.Places}</h4>
                            <p className="date">{edu.DateInitial.year} - {edu.DateFinal.year}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExperienceEducation;