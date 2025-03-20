import React from "react";
import { SOFTWARE, SystemOP, IALanguages, ProgrammingLanguages, ProgrammingFrameworks, DataBases, DevOpsLanguages } from "./data/data.jsx"; 
import SkillAccordion from './SkillAccordion';
import "./Skills.css";

const Skills = props => {
    return (
        <div id="skills" className="skills">
            <h2 className="information-title">{props.translations[props.language]['habilidades']}</h2>
            <div className="row">
                <div className="col-sm-6">
                    <SkillAccordion
                        title={props.language === 'en' ? 'Programming Language' : 'Lenguaje de Programación'}
                        items={ProgrammingLanguages}
                        language={props.language}
                        showSwipe={true}
                    />
                </div>

                <div className="col-sm-6">
                    <SkillAccordion
                        title="Frameworks"
                        items={ProgrammingFrameworks}
                        language={props.language}
                        showSwipe={true}
                    />
                </div>

                <div className="col-sm-6">
                    <SkillAccordion
                        title={props.language === 'en' ? 'Databases':'Base de Datos'}
                        items={DataBases}
                        language={props.language}
                        showSwipe={true}
                    />
                </div>

                <div className="col-sm-6">
                    <SkillAccordion
                        title={props.language === 'en' ? 'Tools AI':'Herramientas IA'}
                        items={IALanguages}
                        language={props.language}
                        showSwipe={true}
                    />
                </div>

                <div className="col-sm-6">
                    <SkillAccordion
                        title="DevOps"
                        items={DevOpsLanguages}
                        language={props.language}
                        showSwipe={true}
                    />
                </div>

                <div className="col-sm-6">
                    <SkillAccordion
                        title={props.language === 'en' ? 'Operating Systems':'Sistemas Operativos'}
                        items={SystemOP}
                        language={props.language}
                        isSystemOP={true}
                        showSwipe={true}
                    />
                </div>

                <div className="col-sm-12">
                    <SkillAccordion
                        title="Software"
                        items={SOFTWARE}
                        language={props.language}
                        isSystemOP={true}
                        showSwipe={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default Skills;