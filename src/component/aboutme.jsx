import React, {useState} from "react"
import './css/AboutMe.css'
import {AboutMe, Likes, Course} from './js/aboutMe'
import {YearsToNow, HowMonth} from './js/calculations'
import { IoDocumentAttachOutline } from "react-icons/io5"

const AboutMeProcess = props => {
    const [hours,setHours] = useState(0)
    const [minutes,setMinutes] = useState(0)
    const [seconds,setSeconds] = useState(0)
    function countD(){
        const timeNows = new Date();
        const timePast = new Date(String(AboutMe.Date.year) + "/" + String(AboutMe.Date.month) + "/" + String(AboutMe.Date.day))
        var timeVal = new Date(timeNows.getTime() - timePast.getTime())
        var format = new Date(timeVal.toString())
        var format2 = new Date(format.toUTCString())
        setHours(format2.getUTCHours())
        setMinutes(Number(format2.getUTCMinutes()) < 10 ? '0'+String(format2.getUTCMinutes()): String(format2.getUTCMinutes()))
        setSeconds(Number(format2.getUTCSeconds()) < 10 ? '0'+String(format2.getUTCSeconds()): String(format2.getUTCSeconds()))
    }

    setInterval(countD, 1000)
    return(
        <div className="AboutMe">
            <form className="container-fluid" onSubmit={(e) => e.preventDefault()}>
                <div className="profile-box container">
                    <div>{AboutMe.Photo}</div>
                    <div>
                        <h2 className="MyName">{AboutMe.Name}</h2>
                        <div className="row">
                            <div className="timer col-sm-6 container">
                                <h1>{(YearsToNow(AboutMe.Date.year, AboutMe.Date.month, AboutMe.Date.day))}</h1>
                                <button><h5>{(props.languages === 'SPANISH' ? 'AÑOS' : 'YEARS')}</h5></button>
                            </div>
                            <div className="timer col-sm-6 container">
                                <h1>{hours}:{minutes}:{seconds}</h1>
                                <button><h5>{props.languages === 'SPANISH' ? 'TIEMPO':'TIME'}</h5></button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <h2 className="container Title2 mt-3">{props.languages === 'SPANISH' ? <><span>ÁREAS</span>{' '}DE TRABAJO</> : <><span>WORK</span>{' '}AREAS</>}</h2>
                <div className="container">
                    {Likes.worksArea.map((dato) => <li>{props.languages === 'SPANISH' ? dato.Spanish : dato.English}</li>)}
                </div>

                <h1 className="Title mt-5">{props.languages === 'SPANISH' ? 'IDIOMAS': 'LANGUAGES'}</h1>
                <div className="row">
                    {AboutMe.Languages.map((dato) => <div className="col-sm-6 education container">
                        <span>{props.languages === 'SPANISH' ? dato.language.Spanish : dato.language.English}: <b>{props.languages === 'SPANISH' ? dato.level.Spanish : dato.level.English}</b></span>
                    </div>
                    )}
                </div>

                <h1 className="Title mt-5">{props.languages === 'SPANISH' ? 'INTERES': 'INTEREST'}</h1>
                <div className="container">
                    <label className="textFormation">{props.languages === 'SPANISH' ? Likes.interest.Spanish : Likes.interest.English}</label>
                </div>

                <h1 className="Title mt-5">{props.languages === 'SPANISH' ? <><span>FORMACIÓN</span>{' '}ACADÉMICA</>: <><span>ACADEMIC</span>{' '}TRAINING</>}</h1>
                <div className="row">
                    {AboutMe.Academic.map((dato) =>
                        <div className="education col-sm-5 container cardMim">
                            <i><IoDocumentAttachOutline/></i>
                            <h3>{props.languages === 'SPANISH' ? dato.Title.Spanish : dato.Title.English}</h3>
                            <span>{HowMonth(dato.DateInitial.month)}-{dato.DateInitial.year}{' - '}{HowMonth(dato.DateFinal.month)}-{dato.DateFinal.year}</span>
                            <h5 className="">
                                <b style={{color:'crimson'}}>
                                    {'CAMPUS: '}
                                </b>
                                {props.languages === 'SPANISH' ? dato.Campus.Spanish : dato.Campus.English}
                            </h5>
                            <h5>
                                <b style={{color:'crimson'}}>
                                    {props.languages === 'SPANISH' ? 'CIUDAD: ' : 'CITY: '}
                                </b>
                                {dato.Places}
                            </h5>
                        </div>
                    )}
                </div>

                <h1 className="Title container mt-5">{props.languages === 'SPANISH' ? 'CURSOS, CONCURSOS, DIPLOMADOS Y CONGRESOS': 'COURSES, COMPETITIONS, DIPLOMA AND CONFERENCES'}</h1>
                <div className="row">
                    {Course.map((dato) => 
                        <div className="education col-sm-5 container cardMim">
                            <i><IoDocumentAttachOutline/></i>
                            <span>{HowMonth(dato.DateInitial.month)}-{dato.DateInitial.year}{' - '}{HowMonth(dato.DateFinal.month)}-{dato.DateFinal.year}</span>
                            <h3>{props.languages === 'SPANISH' ? dato.Title.Spanish : dato.Title.English}</h3>
                            {dato.badges.length !== 0 && <a href={dato.url}>
                                <div className="row container">
                                    {dato.badges.map((dato2) => 
                                            <div className="col-sm-3 container">
                                                {dato2}
                                            </div>
                                    )}
                                </div>
                            </a>}
                            <h5 className="">
                                <b style={{color:'crimson'}}>
                                    {'CAMPUS: '}
                                </b>
                                {props.languages === 'SPANISH' ? dato.Campus.Spanish : dato.Campus.English}
                            </h5>
                            <h5>
                                <b style={{color:'crimson'}}>
                                    {props.languages === 'SPANISH' ? 'CIUDAD: ' : 'CITY: '}
                                </b>
                                {dato.Places}
                            </h5>
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
}
export default AboutMeProcess;