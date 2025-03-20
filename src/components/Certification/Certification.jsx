import React from "react";

import { Course } from "./data/data.jsx";
import CertificationAccordion from "./CertificationAccordion";
import "./Certification.css";

const Certifications = props => {
    return (
        <div className="certifications-container">
            <h2 className="information-title">{props.translations[props.language]['certificados']}</h2>
            <div className="certifications-grid">
                {Course.map((cert, index) => (
                    <CertificationAccordion key={index} cert={cert} language={props.language} />
                ))}
            </div>
        </div>
    );
};

export default Certifications;