import React, { useState, useEffect } from "react";
import { AboutMee } from "./data/data.jsx";
import { YearsToNow } from '../calculations.jsx';
import "./AboutMe.css";

const AboutMe = props => {
    const [hours,setHours] = useState(0);
    const [minutes,setMinutes] = useState(0);
    const [seconds,setSeconds] = useState(0);
    
    useEffect(() => {
        function countD() {
            const timeNows = new Date();
            const timePast = new Date(`${AboutMee.Date.year}/${AboutMee.Date.month}/${AboutMee.Date.day}`);
            let timeVal = new Date(timeNows.getTime() - timePast.getTime());
            let format = new Date(timeVal.toString());
            let format2 = new Date(format.toUTCString());
            setHours(format2.getUTCHours());
            setMinutes(format2.getUTCMinutes().toString().padStart(2, "0"));
            setSeconds(format2.getUTCSeconds().toString().padStart(2, "0"));
        }

        const interval = setInterval(countD, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div id="aboutme" className="aboutme container-fluid">
            <h2 className="information-title">{props.translations[props.language]['acerca_de_mi']}</h2>
            <div className="row">
                {/* 📌 Sección de Foto y Datos */}
                <div className="col-lg-5 col-md-6 col-sm-12 text-center">
                    <div className="photo-container">
                        {AboutMee.Photo}
                    </div>

                    <div className="info-container">
                        <div className="info-box">
                            <h3>{YearsToNow(AboutMee.Date.year, AboutMee.Date.month, AboutMee.Date.day)}</h3>
                            <h5>{props.language === 'es' ? 'AÑOS' : 'YEARS'}</h5>
                        </div>
                        <div className="info-box">
                            <h3>{hours}:{minutes}:{seconds}</h3>
                            <h5>{props.language === 'es' ? 'TIEMPO' : 'TIME'}</h5>
                        </div>
                    </div>

                    <div className="languages-container">
                        {AboutMee.Languages.map((lang, index) => (
                            <h4 key={index} className="work-text-area">
                                {props.language === 'en' ? lang.language.English : lang.language.Spanish} - {props.language === 'en' ? lang.level.English : lang.level.Spanish}
                            </h4>
                        ))}
                        <hr />
                        {AboutMee.worksArea.map((dato, index) => (
                            <h4 key={index} className="work-text-area">
                                {props.language === 'es' ? dato.Spanish : dato.English}.
                            </h4>
                        ))}
                    </div>
                </div>

                {/* 📌 Sección de Descripción */}
                <div className="col-lg-7 col-md-6 col-sm-12 description-container">
                    <p>{props.language === 'es' ? AboutMee.Description.Spanish : AboutMee.Description.English}</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;