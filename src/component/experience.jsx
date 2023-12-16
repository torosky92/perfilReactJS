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
        <div className="Experience" onSubmit={(e) => e.preventDefault()}>
            <h1 className="Title mt-3">{props.languages === 'SPANISH' ? <><span>EXPERIENCIA</span>{' '}LABORAL</>: <><span>WORK</span>{' '}EXPERIENCE</>}</h1>
            <div className="row container-fluid">
                {Experience.map((dato) => <div className="education col-sm-5 card mt-4">
                    <i><IoDocumentAttachOutline/></i>
                    <span>{HowMonth(dato.DateInitial.month)}-{dato.DateInitial.year}{' - '}{Number(dato.DateFinal.month) !== 0 ? HowMonth(dato.DateFinal.month) : HowMonth(dateNow.getMonth()+1)}- {Number(dato.DateFinal.month) !== 0 ? dato.DateFinal.year : dateNow.getFullYear()}</span>
                    <h3>{props.languages === 'SPANISH' ? dato.Position.Spanish : dato.Position.English}</h3>
                    <h5><b style={{color:'crimson'}}>{props.languages === 'SPANISH' ? 'EMPRESA: ' : 'COMPANY: '}</b>{dato.Factory}</h5>
                    <h5><b style={{color:'crimson'}}>{props.languages === 'SPANISH' ? 'CIUDAD: ' : 'CITY: '}</b>{dato.Places}</h5>
                    <h5>{props.languages === 'SPANISH' ? dato.Description.Spanish : dato.Description.English}</h5>
                </div>)}
            </div>
            
            <h1 className="Title mt-4">{props.languages === 'SPANISH' ? <><span>REFERENCIAS</span>{' '}PROFESIONAL</>: <><span>PROFESSIONAL</span>{' '}REFERENCES</>}</h1>
            <div className="row mt-5">
                {ReferenceLAB.map((dato) => <div className="education2">
                    <div className="education">
                        <i><MdWork/></i>
                        <span>{dato.Name}</span>
                        <div className="mt-3"></div>
                        <h5><b style={{color:'crimson'}}>{props.languages === 'SPANISH' ? 'EMPRESA: ' : 'COMPANY: '}</b>{dato.Factory}</h5>
                        <h5><b style={{color:'crimson'}}>{props.languages === 'SPANISH' ? 'CIUDAD: ' : 'CITY: '}</b>{dato.Places}</h5>
                        <h5><b style={{color:'crimson'}}>{props.languages === 'SPANISH' ? 'CONTACTO: ' : 'CONTACT: '}</b>{dato.Contact}</h5>
                    </div>
                </div>)}
            </div>
            
        </div>
    );
}
export default ExperienceProcess;