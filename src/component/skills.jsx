import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './css/showItem.css'
import ShowItem from "./showItem.jsx"
import {ProgrammingLanguages, SystemOP, SOFTWARE} from './js/data'
import {YearsToNow} from './js/calculations'
export const SkillsProcess = props => {
    return(
        <div className="container" onSubmit={(e) => e.preventDefault()}>
            <h1 >{props.languages === 'SPANISH' ? 'SISTEMA OPERATIVO' : 'OS'}</h1>
            <div className="row">
                {SystemOP.map((dato) => (
                    <ShowItem icon={dato.icons} title={dato.system}
                        value={`${(YearsToNow(dato.year, dato.month, dato.day))} ${(props.languages === 'SPANISH' ? 'AÑOS' : 'YEARS')}`}
                        textValue={props.languages === 'SPANISH' ? dato.level.Spanish : dato.level.English} languages={props.languages}
                        library={[]} textLibrary={props.languages === 'SPANISH' ? 'LIBRERIAS' : 'LIBRARY'} hasLibrary={false}/>)
                )}
            </div>
            <h1 >SOFTWARE</h1>
            <div className="row">
                {SOFTWARE.map((dato) => (
                    <ShowItem icon={dato.icons} title={dato.software}
                        value={`${(YearsToNow(dato.year, dato.month, dato.day))} ${(props.languages === 'SPANISH' ? 'AÑOS' : 'YEARS')}`}
                        textValue={''} languages={props.languages}
                        library={[]} textLibrary={props.languages === 'SPANISH' ? 'LIBRERIAS' : 'LIBRARY'} hasLibrary={false}/>)
                )}
            </div>
            <h1 >{props.languages === 'SPANISH' ? 'LENGUAJE DE PROGRAMACIÓN': 'PROGRAMMING LANGUAGE'}</h1>
            <div className="row">
                {ProgrammingLanguages.map((dato) => (
                    <ShowItem icon={dato.icons} title={dato.language}
                        value={`${(YearsToNow(dato.year, dato.month, dato.day))} ${(props.languages === 'SPANISH' ? 'AÑOS' : 'YEARS')}`}
                        textValue={props.languages === 'SPANISH' ? dato.level.Spanish : dato.level.English} languages={props.languages}
                        library={dato.library} textLibrary={props.languages === 'SPANISH' ? 'LIBRERIAS' : 'LIBRARY'} hasLibrary={true}/>)
                )}
                </div>
        </div>
    );
}
export default SkillsProcess;