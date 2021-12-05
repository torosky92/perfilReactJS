import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './css/AboutMe.css'
import {AboutMe, Likes, Course} from './js/aboutMe'
import {YearsToNow, HowMonth} from './js/calculations'
import { IoDocumentAttachOutline } from "react-icons/io5"
const AboutMeProcess = props => {
    return(
        <div className="AboutMe">
            <form className="container-fluid" onSubmit={(e) => e.preventDefault()}>
                <div className="row container">
                    <div className="col-sm-4">{AboutMe.Photo}</div>
                    <div className="col-sm-8">
                        <h2 className="MyName">{AboutMe.Name}</h2>
                        <div className="box timer">
                            <h3>{(YearsToNow(AboutMe.Date.year, AboutMe.Date.month, AboutMe.Date.day))}</h3>
                            <button><h5>{(props.languages === 'SPANISH' ? 'AÑOS' : 'YEARS')}</h5></button>
                        </div>
                    </div>
                </div>
                
                <h1 className="Title mt-5">{props.languages === 'SPANISH' ? <><span>FORMACIÓN</span>{' '}ACADÉMICA</>: <><span>ACADEMIC</span>{' '}TRAINING</>}</h1>
                <div className="row mt-2">
                    {AboutMe.Academic.map((dato) => <div className="boxAcademic container col-sm-6">
                        <h2 className="Title2">{props.languages === 'SPANISH' ? dato.Title.Spanish : dato.Title.English}</h2>
                        <div className="row container">
                            <div className="col-sm-5">
                                <div className="row">
                                    <h4 className="TitleFormation">{'CAMPUS: '}</h4>
                                    <h4 className="TitleFormation">{props.languages === 'SPANISH' ? 'CIUDAD: ' : 'CITY: '}</h4>
                                </div>
                            </div>
                            <div className="col-sm-7 container">
                                <div className="row">
                                    <h4 className="textFormation">{props.languages === 'SPANISH' ? dato.Campus.Spanish : dato.Campus.English}</h4>
                                    <h4 className="textFormation">{dato.Places}</h4>
                                </div>
                            </div>
                        </div>
                        
                        <label>{props.languages === 'SPANISH' ? 'FECHA INICIAL: ' : 'DATE INITIAL: '}{HowMonth(dato.DateInitial.month)}-{dato.DateInitial.year}</label>
                        <label>{props.languages === 'SPANISH' ? 'FECHA FINAL: ' : 'DATE FINAL: '}{HowMonth(dato.DateFinal.month)}-{dato.DateFinal.year}</label>
                    </div>)}
                </div>

                <h1 className="Title mt-5">{props.languages === 'SPANISH' ? 'IDIOMAS': 'LANGUAGES'}</h1>
                <div className="container boxLanguages mt-2">
                    {AboutMe.Languages.map((dato) => <div className="row">
                        <div className="col-sm-3 container"> <h4 className="Title2">{props.languages === 'SPANISH' ? dato.language.Spanish : dato.language.English}</h4> </div>
                        <div className="col-sm-5 container"> <h4 className="textFormation">{props.languages === 'SPANISH' ? dato.level.Spanish : dato.level.English}</h4></div>
                    </div>)}
                </div>

                <h1 className="Title mt-5">{props.languages === 'SPANISH' ? 'INTERES': 'INTEREST'}</h1>
                <div className="container boxLanguages">
                    <label className="textFormation">{props.languages === 'SPANISH' ? Likes.interest.Spanish : Likes.interest.English}</label>
                </div>

                <div className="container boxLanguages mt-4">
                    <h2 className="Title2">{props.languages === 'SPANISH' ? 'ÁREAS DE TRABAJO' : 'WORK AREAS'}</h2>
                    <div className="mt-3">
                        {Likes.worksArea.map((dato) => <li>{props.languages === 'SPANISH' ? dato.Spanish : dato.English}</li>)}
                    </div>
                </div>

                <h1 className="Title container mt-5">{props.languages === 'SPANISH' ? 'CURSOS, CONCURSOS, DIPLOMADOS Y CONGRESOS': 'COURSES, COMPETITIONS, DIPLOMA AND CONFERENCES'}</h1>
                <div className="row">
                    {Course.map((dato) => <div className="education2">
                        <div className="education">
                            <i><IoDocumentAttachOutline/></i>
                            <span>{HowMonth(dato.DateInitial.month)}-{dato.DateInitial.year}{' - '}{HowMonth(dato.DateFinal.month)}-{dato.DateFinal.year}</span>
                            <h3>{props.languages === 'SPANISH' ? dato.Title.Spanish : dato.Title.English}</h3>
                            <p><b style={{color:'crimson'}}>{'CAMPUS: '}</b>{props.languages === 'SPANISH' ? dato.Campus.Spanish : dato.Campus.English}</p>
                            <p><b style={{color:'crimson'}}>{props.languages === 'SPANISH' ? 'CIUDAD: ' : 'CITY: '}</b>{dato.Places}</p>
                        </div>
                    </div>)}
                </div>
            </form>
        </div>
    );
}
export default AboutMeProcess;