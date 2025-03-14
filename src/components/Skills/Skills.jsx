import React from "react";
import { SOFTWARE, SystemOP, IALanguages, ProgrammingLanguages, ProgrammingFrameworks, DataBases, DevOpsLanguages } from "./data/data.jsx"; 
import { YearsToNow } from '../calculations.jsx';
import "./Skills.css";

const Skills = props => {
    return (
        <div id="skills" className="skills">
            <div className="row">
                <div className="col-sm-6">
                    {/* 🔹 LENGUAJES DE PROGRAMACIÓN */}
                    <h3 className="skills-title">{props.language === 'en' ? 'Programming Language':'Lenguaje de Programación'}</h3>
                    <div className="skills-container">
                    {ProgrammingLanguages.map((item, index) => (
                        <div className="skill-card" key={index}>
                            {item.icons}
                            <p>{`${(YearsToNow(item.year, item.month, item.day))} ${(props.language === 'es' ? 'AÑOS' : 'YEARS')}`}</p>
                            <span>{item.language}</span>
                            <small>{props.language === 'en' ? item.level.English : item.level.Spanish}</small>
                        </div>
                    ))}
                    </div>
                </div>

                <div className="col-sm-6">
                    {/* 🔹 LENGUAJES DE PROGRAMACIÓN */}
                    <h3 className="skills-title">Frameworks</h3>
                    <div className="skills-container">
                    {ProgrammingFrameworks.map((item, index) => (
                        <div className="skill-card" key={index}>
                            {item.icons}
                            <p>{`${(YearsToNow(item.year, item.month, item.day))} ${(props.language === 'es' ? 'AÑOS' : 'YEARS')}`}</p>
                            <span>{item.language}</span>
                            <small>{props.language === 'en' ? item.level.English : item.level.Spanish}</small>
                        </div>
                    ))}
                    </div>
                </div>
                
                <div className="col-sm-6">
                    {/* 🔹 LENGUAJES DE PROGRAMACIÓN */}
                    <h3 className="skills-title">{props.language === 'en' ? 'Databases':'Base de Datos'}</h3>
                    <div className="skills-container">
                    {DataBases.map((item, index) => (
                        <div className="skill-card" key={index}>
                            {item.icons}
                            <p>{`${(YearsToNow(item.year, item.month, item.day))} ${(props.language === 'es' ? 'AÑOS' : 'YEARS')}`}</p>
                            <span>{item.language}</span>
                            <small>{props.language === 'en' ? item.level.English : item.level.Spanish}</small>
                        </div>
                    ))}
                    </div>
                </div>
                
                <div className="col-sm-6">
                    {/* 🔹 LENGUAJES DE PROGRAMACIÓN */}
                    <h3 className="skills-title">{props.language === 'en' ? 'Tools AI':'Herramientas IA'}</h3>
                    <div className="skills-container">
                    {IALanguages.map((item, index) => (
                        <div className="skill-card" key={index}>
                            {item.icons}
                            <p>{`${(YearsToNow(item.year, item.month, item.day))} ${(props.language === 'es' ? 'AÑOS' : 'YEARS')}`}</p>
                            <span>{item.language}</span>
                            <small>{props.language === 'en' ? item.level.English : item.level.Spanish}</small>
                        </div>
                    ))}
                    </div>
                </div>
            
                <div className="col-sm-6">
                    {/* 🔹 LENGUAJES DE PROGRAMACIÓN */}
                    <h3 className="skills-title">DevOps</h3>
                    <div className="skills-container">
                    {DevOpsLanguages.map((item, index) => (
                        <div className="skill-card" key={index}>
                            {item.icons}
                            <p>{`${(YearsToNow(item.year, item.month, item.day))} ${(props.language === 'es' ? 'AÑOS' : 'YEARS')}`}</p>
                            <span>{item.language}</span>
                            <small>{props.language === 'en' ? item.level.English : item.level.Spanish}</small>
                        </div>
                    ))}
                    </div>
                </div>
                
                <div className="col-sm-6">
                    {/* 🔹 SISTEMAS OPERATIVOS */}
                    <h3 className="skills-title">{props.language === 'en' ? 'Operating Systems':'Sistemas Operativos'}</h3>
                    <div className="skills-container">
                        {SystemOP.map((item, index) => (
                        <div className="skill-card" key={index}>
                            {item.icons}
                            <span>{item.system}</span>
                            <small>{props.language === 'en' ? item.level.English : item.level.Spanish}</small>
                        </div>
                        ))}
                    </div>
                </div>

                <div className="col-sm-12">
                    {/* 🔹 SOFTWARE */}
                    <h3 className="skills-title">Software</h3>
                    <div className="skills-container">
                        {SOFTWARE.map((item, index) => (
                        <div className="skill-card" key={index}>
                            {item.icons}
                            <span>{item.software}</span>
                            <small>{item.year}</small>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;