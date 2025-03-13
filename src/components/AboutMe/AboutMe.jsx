import React, {useState} from "react";
import { AboutMee } from "./data/data.jsx";
import { YearsToNow } from '../calculations.jsx';

const AboutMe = props => {
    const [hours,setHours] = useState(0);
    const [minutes,setMinutes] = useState(0);
    const [seconds,setSeconds] = useState(0);
    
    function countD(){
        const timeNows = new Date();
        const timePast = new Date(String(AboutMee.Date.year) + "/" + String(AboutMee.Date.month) + "/" + String(AboutMee.Date.day));
        let timeVal = new Date(timeNows.getTime() - timePast.getTime());
        let format = new Date(timeVal.toString());
        let format2 = new Date(format.toUTCString());
        setHours(format2.getUTCHours());
        setMinutes(Number(format2.getUTCMinutes()) < 10 ? '0'+String(format2.getUTCMinutes()): String(format2.getUTCMinutes()));
        setSeconds(Number(format2.getUTCSeconds()) < 10 ? '0'+String(format2.getUTCSeconds()): String(format2.getUTCSeconds()));
    }

    setInterval(countD, 1000);

    return (
        <div className="certifications-container">
                <div className="row">
                    <div className="col-5">
                        <div className="row">
                            <div className="col-sm-12 container">
                                {AboutMee.Photo}
                            </div>
                            <div className="col-sm-3 container">
                                <h3>{(YearsToNow(AboutMee.Date.year, AboutMee.Date.month, AboutMee.Date.day))}</h3>
                                <h5>{(props.language === 'es' ? 'AÑOS' : 'YEARS')}</h5>
                            </div>
                            <div className="col-sm-4 container">
                                <h3>{hours}:{minutes}:{seconds}</h3>
                                <h5>{props.language === 'es' ? 'TIEMPO':'TIME'}</h5>
                            </div>
                            <div className="col-sm-9 container">
                                <div className="container mt-4">
                                    {AboutMee.Languages.map((lang, index) => (
                                        <h4 key={index} className="text-left work-text-area"> 
                                            {props.language === 'en' ? lang.language.English : lang.language.Spanish} - {props.language === 'en' ? lang.level.English : lang.level.Spanish}
                                        </h4>
                                    ))}
                                    <hr/>
                                    {AboutMee.worksArea.map((dato) => (
                                        <><h4 className="text-left work-text-area">{props.language === 'es' ? dato.Spanish : dato.English}.</h4></>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-7">{props.language === 'es' ? AboutMee.Description.Spanish : AboutMee.Description.English}</div>
                
                
            </div>
        </div>
    );
};

export default AboutMe;