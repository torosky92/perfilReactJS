import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './css/App.css'
import Footer from './Footer.jsx'
import ShowItem from "./showItem.jsx"
import { SiFlask, SiMitsubishi } from "react-icons/si"
import {ProgrammingLanguages} from './js/data'
import {YearsToNow} from './js/calculations'
export const SkillsProcess = props => {
    return(
        <div className="Skill">
            <form className="container-fluid" onSubmit={(e) => e.preventDefault()}>
                <div className="row">
                    {ProgrammingLanguages.map((dato) => (
                        <ShowItem BoxIconColor={dato.color} 
                            icon={dato.icons} title={dato.language}
                            value={YearsToNow(dato.year, dato.month, dato.day)}
                            textValue={props.languajes === 'SPANISH' ? dato.level.Spanish : dato.level.English}/>
                        ))}
                    <ShowItem styleBoxIcon={{background:'black'}} 
                        icon={<SiFlask/>} title={'Flask'}
                        value={'3 AÑOS'}
                        textValue={'Avanzado'}/>

                    <ShowItem styleBoxIcon={{background:'#E50914'}} 
                        icon={<SiMitsubishi/>} title={'PLC'}
                        value={'2 AÑOS'}
                        textValue={'Intermedio'}/>
                </div>
                {props.Whatsapp}
                <Footer/>
            </form>
        </div>
    );
}
export default SkillsProcess;