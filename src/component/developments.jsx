import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './css/Development.css'
import {Developments} from './js/development'
import {HowMonth} from './js/calculations'
export const DevelopmentProcess = props => {
    const dateNow = new Date()
    return(
        <div className="Development">
            <form className="container-fluid" onSubmit={(e) => e.preventDefault()}>
                <h1 className="Title mt-3">{props.languages === 'SPANISH' ? <><span>DES</span>ARROLLO</>: <><span>DEVEL</span>OPMENT</>}</h1>
                <div className="boxfind2 mt-5">
                    {Developments.map((dato) => <div className="Development2">
                        <div className="row container">
                            <h3>{props.languages === 'SPANISH' ? dato.title.Spanish : dato.title.English}</h3>
                            <div className="spanDevelopment">
                                <span>{HowMonth(dato.DateInitial.month)} - {dato.DateInitial.year}{props.languages === 'SPANISH' ? ' A ' : ' TO '}{Number(dato.DateFinal.month) !== 0 ? HowMonth(dato.DateFinal.month) : HowMonth(dateNow.getMonth()+1)} - {Number(dato.DateFinal.month) !== 0 ? dato.DateFinal.year : dateNow.getFullYear()}</span>
                            </div>
                            <iframe 
                                src={dato.link}
                                allow='encrypted-media'
                                allowFullScreen
                                title={props.languages === 'SPANISH' ? dato.title.Spanish : dato.title.English}
                            />
                            <label><span>{props.languages === 'SPANISH' ? 'Languajes y ' : 'Languages and '}</span>software:</label>
                            <ul>{dato.icons}</ul>
                        </div>
                    </div>)}
                </div>
            </form>
        </div>
    );
}
export default DevelopmentProcess;