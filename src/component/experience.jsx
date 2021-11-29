import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './css/Experience.css'
import {Experience, ReferenceLAB} from './js/experience'
import {HowMonth} from './js/calculations'
export const ExperienceProcess = props => {
    const dateNow = new Date()
    return(
        <div className="Experience">
            <form className="container-fluid" onSubmit={(e) => e.preventDefault()}>
                <h1 className="Title mt-3">{props.languages === 'SPANISH' ? 'EXPERIENCIA LABORAL': 'WORK EXPERIENCE'}</h1>
                {Experience.map((dato) => <div className="row container mt-3">
                    <div className="col-sm-12 boxTitle">
                        <h3 className="boxTitle">{props.languages === 'SPANISH' ? 'POSICIÓN: ' : 'POSITION: '}{props.languages === 'SPANISH' ? dato.Position.Spanish : dato.Position.English}</h3>
                    </div>
                    <div className="col-sm-12 boxLanguages">
                        <div className="row">
                            <div className="col-sm-3 boxDate ">
                                <div className="row container">
                                    <h4 className="container">{HowMonth(dato.DateInitial.month)}-{dato.DateInitial.year}</h4>
                                    <h4 className="container">
                                        {Number(dato.DateFinal.month) !== 0 ? HowMonth(dato.DateFinal.month) : HowMonth(dateNow.getMonth()+1)}- {Number(dato.DateFinal.month) !== 0 ? dato.DateFinal.year : dateNow.getFullYear()}
                                    </h4>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="row">
                                    <h4 className="TitleFormation">{props.languages === 'SPANISH' ? 'EMPRESA: ' : 'COMPANY: '}</h4>
                                    <h4 className="TitleFormation">{props.languages === 'SPANISH' ? 'CIUDAD: ' : 'CITY: '}</h4>
                                </div>
                            </div>
                            <div className="col-sm-6 container">
                                <div className="row">
                                    <h4 className="textFormation">{dato.Factory}</h4>
                                    <h4 className="textFormation">{dato.Places}</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-sm-3 boxDescription">
                                <h4 className="TitleDescription">{props.languages === 'SPANISH' ? 'DESCRIPCIÓN: ' : 'DESCRIPTION: '}</h4>
                            </div>
                            <div className="col-sm-9 container">
                                <p>{props.languages === 'SPANISH' ? dato.Description.Spanish : dato.Description.English}</p>
                            </div>
                        </div>
                    </div>
                </div>)}
                
                <h1 className="Title mt-4">{props.languages === 'SPANISH' ? 'REFERENCIAS PROFESIONAL': 'PROFESSIONAL REFERENCES'}</h1>
                {ReferenceLAB.map((dato) => <div className="row container mt-3">
                    <div className="col-sm-12 boxTitle">
                        <h3 className="boxTitle">{props.languages === 'SPANISH' ? 'POSICIÓN: ' : 'POSITION: '}{props.languages === 'SPANISH' ? dato.Position.Spanish : dato.Position.English}</h3>
                    </div>
                    <div className="col-sm-12 boxLanguages">
                        <div className="row">
                            <div className="col-sm-3 boxDate">
                                <div className="row">
                                    <h4 className="TitleFormation">{props.languages === 'SPANISH' ? 'NOMBRE: ' : 'NAME: '}</h4>
                                    <h4 className="TitleFormation">{props.languages === 'SPANISH' ? 'EMPRESA: ' : 'COMPANY: '}</h4>
                                    <h4 className="TitleFormation">{props.languages === 'SPANISH' ? 'CIUDAD: ' : 'CITY: '}</h4>
                                </div>
                            </div>
                            <div className="col-sm-6 container">
                                <div className="row">
                                    <h4 className="textFormation">{dato.Name}</h4>
                                    <h4 className="textFormation">{dato.Factory}</h4>
                                    <h4 className="textFormation">{dato.Places}</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-sm-3 boxDescription">
                                <h4 className="TitleDescription">{props.languages === 'SPANISH' ? 'CONTACTO: ' : 'CONTACT: '}</h4>
                            </div>
                            <div className="col-sm-9 container">
                                <p>{dato.Contact}</p>
                            </div>
                        </div>
                    </div>
                </div>)}
            </form>
        </div>
    );
}
export default ExperienceProcess;