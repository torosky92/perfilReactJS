import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './css/showItem.css'
import ShowItem from "./showItem.jsx"
import {ProgrammingLanguages, SystemOP, SOFTWARE} from './js/data'
import {YearsToNow} from './js/calculations'
export const SkillsProcess = props => {
    return(
        <div id='banner' className="container-fluid" onSubmit={(e) => e.preventDefault()}>
            <h1 >{props.languages === 'SPANISH' ? <><span>SISTEMA</span>{' '}OPERATIVO</>: 'OS'}</h1>
            <div className="boxfind mt-3 p-2">
                {SystemOP.map((dato) => (
                    <ShowItem icon={dato.icons} title={dato.system}
                        value={`${(YearsToNow(dato.year, dato.month, dato.day))} ${(props.languages === 'SPANISH' ? 'AÑOS' : 'YEARS')}`}
                        textValue={props.languages === 'SPANISH' ? dato.level.Spanish : dato.level.English} languages={props.languages}
                        library={[]} textLibrary={props.languages === 'SPANISH' ? 'LIBRERIAS' : 'LIBRARY'} hasLibrary={false}/>)
                )}
            </div>
            <h1 ><span>SOFT</span>WARE</h1>
            <div className="boxfind mt-3 p-2">
                {SOFTWARE.map((dato) => (
                    <ShowItem icon={dato.icons} title={dato.software}
                        value={`${(YearsToNow(dato.year, dato.month, dato.day))} ${(props.languages === 'SPANISH' ? 'AÑOS' : 'YEARS')}`}
                        textValue={''} languages={props.languages}
                        library={[]} textLibrary={props.languages === 'SPANISH' ? 'LIBRERIAS' : 'LIBRARY'} hasLibrary={false}/>)
                )}
            </div>
            <h1 >{props.languages === 'SPANISH' ? <><span>LENGUAJE</span>{' '}DE PROGRAMACIÓN</>: <><span>PROGRAMMING</span>{' '}LANGUAGE</>}</h1>
            <div className="boxfind mt-3 p-2">
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