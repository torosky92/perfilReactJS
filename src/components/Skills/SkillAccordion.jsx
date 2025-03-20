import React, { useState } from 'react';
import { YearsToNow } from '../calculations.jsx';

const SkillAccordion = ({ title, items, isSystemOP = false, language, showSwipe }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`skills-accordion ${isOpen ? 'open' : ''}`}>
            <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
                <h3 className="skills-title">
                    {title} <span className="accordion-icon">{isOpen ? '▲' : '▼'}</span>
                </h3>
            </div>

            <div className="accordion-content">
                <div className="skills-container">
                    {items.length % 2 === 0 && <div className="skill-card empty-card" />}
                    {items.map((item, index) => (
                        <div className="skill-card" key={index}>
                            {item.icons}
                            {!isSystemOP && <p>{`${(YearsToNow(item.year, item.month, item.day))} ${language === 'es' ? 'AÑOS' : 'YEARS'}`}</p>}
                            <span>{isSystemOP ? item.system || item.software : item.language || item.software}</span>
                            {item.level && <small>{isSystemOP ? (language === 'en' ? item.level.English : item.level.Spanish) : (language === 'en' ? item.level?.English : item.level?.Spanish) || item.year}</small>}
                        </div>
                    ))}
                </div>
                {showSwipe && <p className="swipe-overlay">⬅️ {language === 'en' ? 'Swipe to view more': 'Desliza para ver más'} ➡️</p>}
            </div>
        </div>
    );
};

export default SkillAccordion;