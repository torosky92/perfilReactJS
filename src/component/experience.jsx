import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './css/Experience.css'
import {Experience, ReferenceLAB} from './js/experience'
import {HowMonth} from './js/calculations'
import { IoDocumentAttachOutline } from "react-icons/io5"
import { MdWork } from "react-icons/md"
export const ExperienceProcess = props => {
    const dateNow = new Date()
    return(
        <div className="Experience">
            <form className="container-fluid" onSubmit={(e) => e.preventDefault()}>
                <h1 className="Title mt-3">{props.languages === 'SPANISH' ? <><span>EXPERIENCIA</span>{' '}LABORAL</>: <><span>WORK</span>{' '}EXPERIENCE</>}</h1>
                <div className="row mt-5">
                    {Experience.map((dato) => <div className="education2">
                        <div className="education">
                            <i><IoDocumentAttachOutline/></i>
                            <span>{HowMonth(dato.DateInitial.month)}-{dato.DateInitial.year}{' - '}{Number(dato.DateFinal.month) !== 0 ? HowMonth(dato.DateFinal.month) : HowMonth(dateNow.getMonth()+1)}- {Number(dato.DateFinal.month) !== 0 ? dato.DateFinal.year : dateNow.getFullYear()}</span>
                            <h3>{props.languages === 'SPANISH' ? dato.Position.Spanish : dato.Position.English}</h3>
                            <p><b style={{color:'crimson'}}>{props.languages === 'SPANISH' ? 'EMPRESA: ' : 'COMPANY: '}</b>{dato.Factory}</p>
                            <p><b style={{color:'crimson'}}>{props.languages === 'SPANISH' ? 'CIUDAD: ' : 'CITY: '}</b>{dato.Places}</p>
                            <p>{props.languages === 'SPANISH' ? dato.Description.Spanish : dato.Description.English}</p>
                        </div>
                    </div>)}
                </div>
                
                
                <h1 className="Title mt-4">{props.languages === 'SPANISH' ? <><span>REFERENCIAS</span>{' '}PROFESIONAL</>: <><span>PROFESSIONAL</span>{' '}REFERENCES</>}</h1>
                <div className="row mt-5">
                    {ReferenceLAB.map((dato) => <div className="education2">
                        <div className="education">
                            <i><MdWork/></i>
                            <span>{dato.Name}</span>
                            <p><b style={{color:'crimson'}}>{props.languages === 'SPANISH' ? 'EMPRESA: ' : 'COMPANY: '}</b>{dato.Factory}</p>
                            <p><b style={{color:'crimson'}}>{props.languages === 'SPANISH' ? 'CIUDAD: ' : 'CITY: '}</b>{dato.Places}</p>
                            <p><b style={{color:'crimson'}}>{props.languages === 'SPANISH' ? 'CONTACTO: ' : 'CONTACT: '}</b>{dato.Contact}</p>
                        </div>
                    </div>)}
                </div>
                
            </form>
        </div>
    );
}
export default ExperienceProcess;